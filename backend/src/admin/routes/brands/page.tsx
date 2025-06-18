import {defineRouteConfig} from "@medusajs/admin-sdk"
import {TagSolid, Trash} from "@medusajs/icons"
import {
    Container,
    createDataTableColumnHelper,
    DataTable,
    DataTablePaginationState,
    Heading,
    useDataTable,
} from "@medusajs/ui"
import {useNavigate} from "react-router-dom"
import {useQuery, useQueryClient} from "@tanstack/react-query"
import {sdk} from "../../lib/sdk"
import {useMemo, useState} from "react"
import {CreateBrandForm} from "../../components/create-brand-form.tsx"

type Brand = {
    id: string
    name: string
}
type BrandsResponse = {
    brands: Brand[]
    count: number
    limit: number
    offset: number
}

const BrandsPage = () => {
    const limit = 15
    const [pagination, setPagination] = useState<DataTablePaginationState>({
        pageSize: limit,
        pageIndex: 0,
    })
    const offset = useMemo(() => pagination.pageIndex * limit, [pagination])

    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const {data, isLoading} = useQuery<BrandsResponse>({
        queryKey: ["brands", limit, offset],
        queryFn: () =>
            sdk.client.fetch("/admin/brands", {
                query: {limit, offset},
            }),
    })

    const handleDelete = async (id: string) => {
        const confirmed = window.confirm("Bu markayı silmek istediğinize emin misiniz?")
        if (!confirmed) {
            return
        }

        try {
            // a) Native fetch kullanarak DELETE isteğini gönderiyoruz:
            const response = await fetch(`/admin/brands/${id}`, {
                method: "DELETE",
                headers: {},
            })

            if (response.status === 204) {
                // refresh the list
                queryClient.invalidateQueries({queryKey: ["brands", limit, offset]})
            } else {
                // throw error if retrieve 200 or other
                const data = await response.json().catch(() => null)
                console.warn("Beklenmeyen silme yanıtı:", data)
                queryClient.invalidateQueries({queryKey: ["brands", limit, offset]})
            }
        } catch (err) {
            console.error("Silme işlemi başarısız:", err)
        }
    }

    // define columns in useMemo
    const columns = useMemo(() => {
        const columnHelper = createDataTableColumnHelper<Brand>()
        return [
            columnHelper.accessor("id", {header: "ID"}),
            columnHelper.accessor("name", {
                header: "İsim",
                enableSorting: true
            }),
            columnHelper.display({
                id: "actions",
                header: "",
                size: 24,
                meta: {
                    align: "right",
                },
                cell: ({row}) => {
                    const brandId = row.original.id
                    return (
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                void handleDelete(brandId)
                            }}
                            className="flex items-center justify-center text-red-500 hover:text-red-700"
                            title="Sil"
                            style={{width: "100%"}}
                        >
                            <Trash className="h-5 w-5"/>
                        </button>
                    )
                },
            }),
        ]
    }, [handleDelete])

    // 4) DataTable instance’ını oluşturuyoruz:
    const table = useDataTable({
        columns,
        data: data?.brands || [],
        getRowId: (row) => row.id,
        rowCount: data?.count || 0,
        isLoading,
        pagination: {
            state: pagination,
            onPaginationChange: setPagination,
        },
        onRowClick() {
            navigate(`/products`)
        },
    })

    return (
        <Container className="divide-y p-0">
            <DataTable instance={table}>
                <DataTable.Toolbar
                    className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
                    <Heading>Markalar</Heading>
                    <CreateBrandForm/>
                </DataTable.Toolbar>
                <DataTable.Table/>
                <DataTable.Pagination
                    translations={{
                        next: "Sonraki",
                        prev: "Önceki",
                        of: "/",
                        pages: "sayfalar",
                        results: "sonuç",
                    }}
                />
            </DataTable>
        </Container>
    )
}

export const config = defineRouteConfig({
    label: "Markalar",
    icon: TagSolid,
})

export default BrandsPage
