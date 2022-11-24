// series-user-info-supply-image
interface UserInfoSupplyImage {
    image_height: number;
    image_id:string;
    image_idx: number;
    image_key: string;
    image_seq: number;
    image_url: string;
    image_width: number;
    mime_type: string;
}

// series-user-info
interface SaleUserInfo {
    follow_yn: string;
    nick_name: string;
    supply_images: UserInfoSupplyImage[];
    user_id:string;
}
// series-image-type
interface SupplyImage {
    image_height: number;
    image_id: string;
    image_idx: number;
    image_key: string;
    image_seq: number;
    image_url: string;
    image_width: number;
    mime_type: string;
}
// series-type
export interface SeriesType {
    content_data_type_idx: number;
    episode_count: number;
    genres_type_idxs: string;
    scope_type_idx: number;
    supply_images: SupplyImage[];
    supply_name: string;
    supply_tag: string;
    topic_idx: number;
    sale_user_info: SaleUserInfo;
}
// episode-type
export interface EpisodeType {
    create_date?: string;
    event_code?: string;
    event_for_sale_idx?: number;
    event_idx: number;
    keep_price: number;
    publish_yn?: string;
    rental_price: number;
    keep_dc_price: number;
    rental_dc_price: number;
    sale_onoff_yn?: string;
    sort_order?: number;
    supply_images?: any;
    supply_name: string;
}

// balance-type
export interface BalanceType {
    balance: number;
    balance_by_bonus: number;
    balance_by_subscription: number;
    balance_by_topup: number;
}