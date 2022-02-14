export interface Producto{
  id?:  number | undefined,
  nombre: string | undefined,
  cantidad:  number | undefined,
  estado: string | undefined,
  imagen?: File|null | undefined,
  observaciones: string | undefined,
  precio:  number | undefined,
  ciudades:string | undefined,
  created_at?: string | undefined,
  updated_at?: string | undefined,
}
