import { assetPrefix } from "../../../next.config";
export async function loadService() {
    const service_Response = await fetch(`${assetPrefix}/api/services`)
    const service_Data = await service_Response.json()

    return service_Data
}