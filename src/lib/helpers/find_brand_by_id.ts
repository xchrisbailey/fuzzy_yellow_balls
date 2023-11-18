import type { Brand } from '@prisma/client';

export function find_brand_by_id(id: string, brands: Brand[]): string {
	const brand = brands.find((brand) => brand.id === id);
	return brand?.name || 'Unknown';
}
