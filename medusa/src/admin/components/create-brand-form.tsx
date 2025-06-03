import * as zod from "zod"
import {Controller, FormProvider, useForm} from "react-hook-form"
import {Button, FocusModal, Heading, Input, Label} from "@medusajs/ui"
import {sdk} from "../lib/sdk"
import {useQueryClient} from "@tanstack/react-query"
import {useState} from "react"
import {toast} from "sonner"


const schema = zod.object({
    name: zod.string(),
})

export const CreateBrandForm = () => {
    const [open, setOpen] = useState(false) // modal state
    const form = useForm<zod.infer<typeof schema>>({
        defaultValues: {name: ""},
    })

    const queryClient = useQueryClient()

    const handleSubmit = form.handleSubmit(async ({name}) => {
        try {
            await sdk.client.fetch("/admin/brands", {
                method: "POST",
                body: {name},
            })

            form.reset()
            await queryClient.invalidateQueries({queryKey: ["brands"]})

            toast.success("Marka başarıyla eklendi")
            setOpen(false) // ✅ Modal'ı kapat
        } catch (e) {
            toast.error("Marka eklenemedi")
            console.error(e)
        }
    })

    return (
        <FocusModal open={open} onOpenChange={setOpen}>
            <FocusModal.Trigger asChild>
                <Button variant="secondary">+ Marka Ekle</Button>
            </FocusModal.Trigger>
            <FocusModal.Content>
                <FocusModal.Title>
                    <Heading level="h2" className="p-5">
                        Marka Ekle
                    </Heading>
                </FocusModal.Title>
                <FocusModal.Description>
                    <></>
                </FocusModal.Description>
                <FormProvider {...form}>
                    <form onSubmit={handleSubmit}
                          className="flex h-full flex-col overflow-hidden">
                        <FocusModal.Header>
                            <div
                                className="flex items-center justify-end gap-x-2">
                                <FocusModal.Close asChild>
                                    <Button size="small" variant="secondary">
                                        İptal
                                    </Button>
                                </FocusModal.Close>
                                <Button type="submit" size="small">
                                    Kaydet
                                </Button>
                            </div>
                        </FocusModal.Header>
                        <FocusModal.Body>
                            <div
                                className="flex flex-1 flex-col items-center overflow-y-auto">
                                <div
                                    className="mx-auto flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16">

                                    <div className="grid grid-cols-2 gap-4">
                                        <Controller
                                            control={form.control}
                                            name="name"
                                            render={({field}) => (
                                                <div
                                                    className="flex flex-col space-y-2">
                                                    <div
                                                        className="flex items-center gap-x-1">
                                                        <Label size="small"
                                                               weight="plus">
                                                            Markanın İsmi
                                                        </Label>
                                                    </div>
                                                    <Input {...field} />
                                                </div>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </FocusModal.Body>
                    </form>
                </FormProvider>
            </FocusModal.Content>
        </FocusModal>
    )
}
