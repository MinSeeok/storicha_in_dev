// 에피소드 테마
export interface EpisodeType {
    create_date?: string;
    event_code?: string;
    event_for_sale_idx?: number;
    event_idx: number;
    keep_price?: number;
    publish_yn?: string;
    rental_price?: number;
    sale_onoff_yn?: string;
    sort_order?: number;
    supply_images?: any;
    supply_name?: string;
}