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
    create_date: string;
    discount_yn: string;
    event_code: string;
    event_for_sale_idx: number;
    event_idx: number;
    keep_dc_price: number;
    keep_price: number;
    publish_yn: string;
    rental_dc_price: number;
    rental_price: number;
    sale_onoff_yn: string;
    sort_order: number;
    supply_images: SupplyImage[];
    supply_name: string;
}

// balance-type
export interface BalanceType {
    balance: number;
    balance_by_bonus: number;
    balance_by_subscription: number;
    balance_by_topup: number;
}

// topup-data
interface TopupResponseData{
    cash_buy_type?:string; 
    cash_fillup_amount?:number;
    cash_price_policy_idx?:number;
    cash_product_idx?:number;
    cash_product_title?:string;
    product_dc_price?:number;
    product_dc_price_yn?:string;
    product_price?: number;
    vat_percent?: number;
}
interface TopupResponseOption{
    option_use_yn?:string;
    paging_use_yn?:string;
} 

export interface TopupProductData{
    response_code?: string;
    response_data?: Array<TopupResponseData>;
    response_data_count?:number;
    response_message?:string;
    response_option?:TopupResponseOption;
    response_status?:string;
}

interface SalePolicyImage {
    image_height: number;
    image_id: string;
    image_idx: number;
    image_key: string;
    image_seq: number;
    image_url: string;
    image_width: number;
    mime_type: string;
}

export interface SalePolicyEnum{
    corporate_idx: number;
    examin_yn: string;
    image_idx: number;
    sale_title: string;
    selling_start_date: string;
    selling_stop_date: string;
    selling_yn: string;
    series_title: string;
    set_idx: number;
    supply_images: SalePolicyImage[];
    update_date: string;
}