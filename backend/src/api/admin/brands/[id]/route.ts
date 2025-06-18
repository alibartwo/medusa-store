// src/api/admin/brands/[id]/route.ts
import {MedusaRequest, MedusaResponse} from "@medusajs/framework/http"
import {BRAND_MODULE} from "../../../../modules/brand"
import BrandModuleService from "../../../../modules/brand/service";

type Params = {
    id: string
}

export const DELETE = async (
    req: MedusaRequest<unknown, Params>,
    res: MedusaResponse
) => {
    const service: BrandModuleService = req.scope.resolve(BRAND_MODULE)
    const deletedBrand = await service.deleteBrands(req.params.id)

    res.status(204).send()
}
