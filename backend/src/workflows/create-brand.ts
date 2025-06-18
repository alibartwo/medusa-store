import {
    createStep,
    createWorkflow,
    StepResponse,
    WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import {emitEventStep} from "@medusajs/medusa/core-flows"
import {BRAND_MODULE} from "../modules/brand"
import BrandModuleService from "../modules/brand/service"

// step
export const createBrandStep = createStep(
    "create-brand-step",
    async (input: { name: string }, {container}) => {
        const service: BrandModuleService = container.resolve(BRAND_MODULE)
        const brand = await service.createBrands(input)
        return new StepResponse(brand, brand.id)
    },
    async (id: string, {container}) => {
        const service: BrandModuleService = container.resolve(BRAND_MODULE)
        await service.deleteBrands(id)
    }
)

// workflow
export const createBrandWorkflow = createWorkflow(
    "create-brand",
    (input: { name: string }) => {
        const brand = createBrandStep(input)

        // emit a workflow event so subscribers can react
        emitEventStep({
            eventName: "brand.created",
            data: {id: brand.id},
        })

        return new WorkflowResponse(brand)
    }
)
