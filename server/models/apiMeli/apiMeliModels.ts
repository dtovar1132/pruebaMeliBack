export interface ListProducts {
  site_id: SiteID;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: Result[];
  sort: Sort;
  available_sorts: Sort[];
  filters: any[];
  available_filters: AvailableFilter[];
  pdp_tracking: PDPTracking;
  user_context: null;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id: string;
  name: string;
  results: number;
}

export interface Sort {
  id: string;
  name: string;
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface PDPTracking {
  group: boolean;
  product_info: ProductInfo[];
}

export interface ProductInfo {
  id: string;
  score: number;
  status: string;
}

export interface Result {
  id: string;
  title: string;
  condition: Condition;
  thumbnail_id: string;
  catalog_product_id: null | string;
  listing_type_id: ListingTypeID;
  permalink: string;
  buying_mode: BuyingMode;
  site_id: SiteID;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: CurrencyID;
  order_backend: number;
  price: number;
  original_price: number | null;
  sale_price: SalePrice;
  available_quantity: number;
  official_store_id: null;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: Date;
  seller: Seller;
  attributes: ResultAttribute[];
  installments: Installments;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: any[];
  inventory_id: null | string;
  variation_filters?: VariationFilter[];
  variation_id?: string;
  variations_data?: { [key: string]: VariationsDatum };
  differential_pricing?: DifferentialPricing;
  pictures: Pictur[],
  plain_text: string,
  initial_quantity: number

}

export interface Pictur {
  id:         string;
  url:        string;
  secure_url: string;
  size:       string;
  max_size:   string;
  quality:    string;
}

export interface ResultAttribute {
  id: string;
  name: string;
  value_id: null | string;
  value_name: null | string;
  attribute_group_id: AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  value_struct: Struct | null;
  values: AttributeValue[];
  source: number;
  value_type: Value;
}

export enum AttributeGroupID {
  Others = "OTHERS",
}

export enum AttributeGroupName {
  Otros = "Otros",
}

export interface Struct {
  number: number;
  unit: Unit;
}

export enum Unit {
  CM = "cm",
  G = "g",
  Kg = "kg",
  LB = "lb",
}

export enum Value {
  Boolean = "boolean",
  List = "list",
  Number = "number",
  NumberUnit = "number_unit",
  String = "string",
}

export interface AttributeValue {
  id: null | string;
  name: null | string;
  struct: Struct | null;
  source: number;
}

export enum BuyingMode {
  BuyItNow = "buy_it_now",
}

export enum Condition {
  New = "new",
}

export enum CurrencyID {
  Ars = "ARS",
}

export interface DifferentialPricing {
  id: number;
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: CurrencyID;
}

export enum ListingTypeID {
  GoldPro = "gold_pro",
  GoldSpecial = "gold_special",
}

export interface SalePrice {
  price_id: string;
  amount: number;
  conditions: Conditions;
  currency_id: CurrencyID;
  exchange_rate: null;
  payment_method_prices: any[];
  payment_method_type: PaymentMethodType;
  regular_amount: number | null;
  type: Type;
  metadata: Metadata;
}

export interface Conditions {
  eligible: boolean;
  context_restrictions: ContextRestriction[];
  start_time: Date | null;
  end_time: Date | null;
}

export enum ContextRestriction {
  ChannelMarketplace = "channel_marketplace",
}

export interface Metadata {
  promotion_id?: string;
  promotion_type?: PromotionType;
  campaign_id?: CampaignID;
}

export enum CampaignID {
  Mla54082 = "MLA54082",
  Mla54909 = "MLA54909",
  Mla55008 = "MLA55008",
}

export enum PromotionType {
  Campaign = "campaign",
  Custom = "custom",
}

export enum PaymentMethodType {
  Tmp = "TMP",
}

export enum Type {
  Promotion = "promotion",
  Standard = "standard",
}

export interface Seller {
  id: number;
  nickname: string;
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: LogisticType;
  mode: Mode;
  tags: Tag[];
  benefits: null;
  promise: null;
  shipping_score: number;
}

export enum LogisticType {
  CrossDocking = "cross_docking",
  DropOff = "drop_off",
  XdDropOff = "xd_drop_off",
}

export enum Mode {
  Me2 = "me2",
}

export enum Tag {
  FSThresholdMlaChangeFeb2021 = "fs_threshold_mla_change_feb2021",
  MLACHGThresholdEne24 = "MLA-CHG-threshold-ene-24",
  MLACHGThresholdNov23 = "MLA-CHG-threshold-nov-23",
  MLAChgThresholdAgo22 = "MLA-chg-threshold-ago-22",
  MLAChgThresholdFeb23 = "MLA-chg-threshold-Feb-23",
  MandatoryFreeShipping = "mandatory_free_shipping",
  SelfServiceIn = "self_service_in",
}

export enum SiteID {
  Mla = "MLA",
}

export enum VariationFilter {
  Character = "CHARACTER",
  Color = "COLOR",
  FabricDesign = "FABRIC_DESIGN",
  PatternName = "PATTERN_NAME",
  Size = "SIZE",
}

export interface VariationsDatum {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  price: number;
  user_product_id: string;
  attributes: VariationsDatumAttribute[];
}

export interface VariationsDatumAttribute {
  id: string;
  name: string;
  value_name: Value;
  value_type: string;
}
