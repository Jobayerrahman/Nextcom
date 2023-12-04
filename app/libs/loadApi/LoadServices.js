export async function loadService() {
    const service_Response = await fetch('http://localhost:3000/api/services')
    const service_Data = await service_Response.json()

    return service_Data
}