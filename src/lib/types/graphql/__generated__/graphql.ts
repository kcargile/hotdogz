/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** This field accepts both ISODateString and ISODateTimeStringexample: 1992-08-14 or 1992-08-14T03:42:00.000Z */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AllDog = {
  __typename?: 'AllDog';
  items?: Maybe<Array<Maybe<Dog>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllFaq = {
  __typename?: 'AllFaq';
  items?: Maybe<Array<Maybe<Faq>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllFooter = {
  __typename?: 'AllFooter';
  items?: Maybe<Array<Maybe<Footer>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllGlobalSettings = {
  __typename?: 'AllGlobalSettings';
  items?: Maybe<Array<Maybe<GlobalSettings>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllHeader = {
  __typename?: 'AllHeader';
  items?: Maybe<Array<Maybe<Header>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllHuman = {
  __typename?: 'AllHuman';
  items?: Maybe<Array<Maybe<Human>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllMenu = {
  __typename?: 'AllMenu';
  items?: Maybe<Array<Maybe<Menu>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllPage = {
  __typename?: 'AllPage';
  items?: Maybe<Array<Maybe<Page>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllSysAsset = {
  __typename?: 'AllSysAsset';
  items?: Maybe<Array<Maybe<SysAsset>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Dog = {
  __typename?: 'Dog';
  bio?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  breed?: Maybe<Scalars['String']>;
  dislikes?: Maybe<Array<Maybe<Scalars['String']>>>;
  favorite_color?: Maybe<Scalars['String']>;
  good_fetch_rating?: Maybe<Scalars['Float']>;
  humansConnection?: Maybe<DogHumansConnection>;
  likes?: Maybe<Array<Maybe<Scalars['String']>>>;
  photoConnection?: Maybe<SysAssetConnection>;
  seeking?: Maybe<Array<Maybe<Scalars['String']>>>;
  seo?: Maybe<Seo>;
  spayed_neutered?: Maybe<Scalars['Boolean']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  vax_status?: Maybe<Scalars['String']>;
};


export type DogHumansConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type DogHumansConnection = {
  __typename?: 'DogHumansConnection';
  edges?: Maybe<Array<Maybe<DogHumansEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DogHumansEdge = {
  __typename?: 'DogHumansEdge';
  node?: Maybe<DogHumansNode>;
};

export type DogHumansNode = Human;

export type DogHumansWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  human?: InputMaybe<HumanWhere>;
};

export enum DogOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type DogWhere = {
  AND?: InputMaybe<Array<InputMaybe<DogWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<DogWhere>>>;
  bio?: InputMaybe<Scalars['String']>;
  bio_exists?: InputMaybe<Scalars['Boolean']>;
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bio_ne?: InputMaybe<Scalars['String']>;
  bio_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  birthday_exists?: InputMaybe<Scalars['Boolean']>;
  birthday_gt?: InputMaybe<Scalars['DateTime']>;
  birthday_gte?: InputMaybe<Scalars['DateTime']>;
  birthday_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  birthday_lt?: InputMaybe<Scalars['DateTime']>;
  birthday_lte?: InputMaybe<Scalars['DateTime']>;
  birthday_ne?: InputMaybe<Scalars['DateTime']>;
  birthday_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  breed?: InputMaybe<Scalars['String']>;
  breed_exists?: InputMaybe<Scalars['Boolean']>;
  breed_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  breed_ne?: InputMaybe<Scalars['String']>;
  breed_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  dislikes?: InputMaybe<Scalars['String']>;
  dislikes_exists?: InputMaybe<Scalars['Boolean']>;
  dislikes_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dislikes_ne?: InputMaybe<Scalars['String']>;
  dislikes_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  favorite_color?: InputMaybe<Scalars['String']>;
  favorite_color_exists?: InputMaybe<Scalars['Boolean']>;
  favorite_color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  favorite_color_ne?: InputMaybe<Scalars['String']>;
  favorite_color_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  good_fetch_rating?: InputMaybe<Scalars['Float']>;
  good_fetch_rating_exists?: InputMaybe<Scalars['Boolean']>;
  good_fetch_rating_gt?: InputMaybe<Scalars['Float']>;
  good_fetch_rating_gte?: InputMaybe<Scalars['Float']>;
  good_fetch_rating_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  good_fetch_rating_lt?: InputMaybe<Scalars['Float']>;
  good_fetch_rating_lte?: InputMaybe<Scalars['Float']>;
  good_fetch_rating_ne?: InputMaybe<Scalars['Float']>;
  good_fetch_rating_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  humans?: InputMaybe<DogHumansWhere>;
  humans_exists?: InputMaybe<Scalars['Boolean']>;
  likes?: InputMaybe<Scalars['String']>;
  likes_exists?: InputMaybe<Scalars['Boolean']>;
  likes_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  likes_ne?: InputMaybe<Scalars['String']>;
  likes_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  photo?: InputMaybe<SysAssetWhere>;
  photo_exists?: InputMaybe<Scalars['Boolean']>;
  seeking?: InputMaybe<Scalars['String']>;
  seeking_exists?: InputMaybe<Scalars['Boolean']>;
  seeking_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seeking_ne?: InputMaybe<Scalars['String']>;
  seeking_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo?: InputMaybe<SeoWhere>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  spayed_neutered?: InputMaybe<Scalars['Boolean']>;
  spayed_neutered_exists?: InputMaybe<Scalars['Boolean']>;
  spayed_neutered_ne?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vax_status?: InputMaybe<Scalars['String']>;
  vax_status_exists?: InputMaybe<Scalars['Boolean']>;
  vax_status_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vax_status_ne?: InputMaybe<Scalars['String']>;
  vax_status_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EntrySystemField = {
  __typename?: 'EntrySystemField';
  branch?: Maybe<Scalars['String']>;
  content_type_uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<SystemPublishDetails>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export enum EvalReferenceEnum {
  All = 'ALL',
  Any = 'ANY'
}

export type Faq = {
  __typename?: 'Faq';
  doggie_dating?: Maybe<Array<Maybe<FaqDoggieDating>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  using_the_site?: Maybe<Array<Maybe<FaqUsingTheSite>>>;
};

export type FaqDoggieDating = {
  __typename?: 'FaqDoggieDating';
  answer?: Maybe<FaqDoggieDatingAnswer>;
  question?: Maybe<Scalars['String']>;
};

export type FaqDoggieDatingAnswer = {
  __typename?: 'FaqDoggieDatingAnswer';
  embedded_itemsConnection?: Maybe<FaqDoggieDatingAnswerEmbeddedItemsConnection>;
  json?: Maybe<Scalars['JSON']>;
};


export type FaqDoggieDatingAnswerEmbeddedItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FaqDoggieDatingAnswerEmbeddedItemsConnection = {
  __typename?: 'FaqDoggieDatingAnswerEmbeddedItemsConnection';
  edges?: Maybe<Array<Maybe<FaqDoggieDatingAnswerEmbeddedItemsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FaqDoggieDatingAnswerEmbeddedItemsEdge = {
  __typename?: 'FaqDoggieDatingAnswerEmbeddedItemsEdge';
  node?: Maybe<FaqDoggieDatingAnswerEmbeddedItemsNode>;
};

export type FaqDoggieDatingAnswerEmbeddedItemsNode = SysAsset;

export type FaqDoggieDatingWhere = {
  answer?: InputMaybe<Scalars['JSON']>;
  answer_exists?: InputMaybe<Scalars['Boolean']>;
  question?: InputMaybe<Scalars['String']>;
  question_exists?: InputMaybe<Scalars['Boolean']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question_ne?: InputMaybe<Scalars['String']>;
  question_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum FaqOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type FaqUsingTheSite = {
  __typename?: 'FaqUsingTheSite';
  answer?: Maybe<FaqUsingTheSiteAnswer>;
  question?: Maybe<Scalars['String']>;
};

export type FaqUsingTheSiteAnswer = {
  __typename?: 'FaqUsingTheSiteAnswer';
  embedded_itemsConnection?: Maybe<FaqUsingTheSiteAnswerEmbeddedItemsConnection>;
  json?: Maybe<Scalars['JSON']>;
};


export type FaqUsingTheSiteAnswerEmbeddedItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FaqUsingTheSiteAnswerEmbeddedItemsConnection = {
  __typename?: 'FaqUsingTheSiteAnswerEmbeddedItemsConnection';
  edges?: Maybe<Array<Maybe<FaqUsingTheSiteAnswerEmbeddedItemsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FaqUsingTheSiteAnswerEmbeddedItemsEdge = {
  __typename?: 'FaqUsingTheSiteAnswerEmbeddedItemsEdge';
  node?: Maybe<FaqUsingTheSiteAnswerEmbeddedItemsNode>;
};

export type FaqUsingTheSiteAnswerEmbeddedItemsNode = SysAsset;

export type FaqUsingTheSiteWhere = {
  answer?: InputMaybe<Scalars['JSON']>;
  answer_exists?: InputMaybe<Scalars['Boolean']>;
  question?: InputMaybe<Scalars['String']>;
  question_exists?: InputMaybe<Scalars['Boolean']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question_ne?: InputMaybe<Scalars['String']>;
  question_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FaqWhere = {
  AND?: InputMaybe<Array<InputMaybe<FaqWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  doggie_dating?: InputMaybe<FaqDoggieDatingWhere>;
  doggie_dating_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  using_the_site?: InputMaybe<FaqUsingTheSiteWhere>;
  using_the_site_exists?: InputMaybe<Scalars['Boolean']>;
};

export type Footer = {
  __typename?: 'Footer';
  imageConnection?: Maybe<SysAssetConnection>;
  links?: Maybe<Array<Maybe<FooterLinks>>>;
  main_copy?: Maybe<FooterMainCopy>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export type FooterLinks = {
  __typename?: 'FooterLinks';
  label?: Maybe<Scalars['String']>;
  targetConnection?: Maybe<FooterLinksTargetConnection>;
};

export type FooterLinksTargetConnection = {
  __typename?: 'FooterLinksTargetConnection';
  edges?: Maybe<Array<Maybe<FooterLinksTargetEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FooterLinksTargetEdge = {
  __typename?: 'FooterLinksTargetEdge';
  node?: Maybe<FooterLinksTargetNode>;
};

export type FooterLinksTargetNode = Page;

export type FooterLinksTargetWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  page?: InputMaybe<PageWhere>;
};

export type FooterLinksWhere = {
  label?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_ne?: InputMaybe<Scalars['String']>;
  label_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  target?: InputMaybe<FooterLinksTargetWhere>;
  target_exists?: InputMaybe<Scalars['Boolean']>;
};

export type FooterMainCopy = {
  __typename?: 'FooterMainCopy';
  embedded_itemsConnection?: Maybe<FooterMainCopyEmbeddedItemsConnection>;
  json?: Maybe<Scalars['JSON']>;
};


export type FooterMainCopyEmbeddedItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FooterMainCopyEmbeddedItemsConnection = {
  __typename?: 'FooterMainCopyEmbeddedItemsConnection';
  edges?: Maybe<Array<Maybe<FooterMainCopyEmbeddedItemsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FooterMainCopyEmbeddedItemsEdge = {
  __typename?: 'FooterMainCopyEmbeddedItemsEdge';
  node?: Maybe<FooterMainCopyEmbeddedItemsNode>;
};

export type FooterMainCopyEmbeddedItemsNode = SysAsset;

export enum FooterOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type FooterWhere = {
  AND?: InputMaybe<Array<InputMaybe<FooterWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  image?: InputMaybe<SysAssetWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  links?: InputMaybe<FooterLinksWhere>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  main_copy?: InputMaybe<Scalars['JSON']>;
  main_copy_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type GlobalSettings = {
  __typename?: 'GlobalSettings';
  attribution?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  default_dog_imageConnection?: Maybe<SysAssetConnection>;
  faviconConnection?: Maybe<SysAssetConnection>;
  feature_flags?: Maybe<Array<Maybe<GlobalSettingsFeatureFlags>>>;
  logoConnection?: Maybe<SysAssetConnection>;
  site_title?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export type GlobalSettingsFeatureFlags = {
  __typename?: 'GlobalSettingsFeatureFlags';
  enabled?: Maybe<Scalars['Boolean']>;
  feature?: Maybe<Scalars['String']>;
};

export type GlobalSettingsFeatureFlagsWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
  feature?: InputMaybe<Scalars['String']>;
  feature_exists?: InputMaybe<Scalars['Boolean']>;
  feature_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  feature_ne?: InputMaybe<Scalars['String']>;
  feature_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum GlobalSettingsOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type GlobalSettingsWhere = {
  AND?: InputMaybe<Array<InputMaybe<GlobalSettingsWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<GlobalSettingsWhere>>>;
  attribution?: InputMaybe<Scalars['String']>;
  attribution_exists?: InputMaybe<Scalars['Boolean']>;
  attribution_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  attribution_ne?: InputMaybe<Scalars['String']>;
  attribution_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  copyright?: InputMaybe<Scalars['String']>;
  copyright_exists?: InputMaybe<Scalars['Boolean']>;
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  copyright_ne?: InputMaybe<Scalars['String']>;
  copyright_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  default_dog_image?: InputMaybe<SysAssetWhere>;
  default_dog_image_exists?: InputMaybe<Scalars['Boolean']>;
  favicon?: InputMaybe<SysAssetWhere>;
  favicon_exists?: InputMaybe<Scalars['Boolean']>;
  feature_flags?: InputMaybe<GlobalSettingsFeatureFlagsWhere>;
  feature_flags_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logo?: InputMaybe<SysAssetWhere>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  site_title?: InputMaybe<Scalars['String']>;
  site_title_exists?: InputMaybe<Scalars['Boolean']>;
  site_title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  site_title_ne?: InputMaybe<Scalars['String']>;
  site_title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type Header = {
  __typename?: 'Header';
  header_content?: Maybe<Array<Maybe<HeaderHeaderContent>>>;
  primary_navigationConnection?: Maybe<HeaderPrimaryNavigationConnection>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export type HeaderHeaderContent = HeaderHeaderContentHeroImage | HeaderHeaderContentImageCarousel;

export type HeaderHeaderContentHeroImage = {
  __typename?: 'HeaderHeaderContentHeroImage';
  hero_image?: Maybe<HeroImage>;
};

export type HeaderHeaderContentHeroImageWhere = {
  caption?: InputMaybe<Scalars['String']>;
  caption_exists?: InputMaybe<Scalars['Boolean']>;
  caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  caption_ne?: InputMaybe<Scalars['String']>;
  caption_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image?: InputMaybe<SysAssetWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
};

export type HeaderHeaderContentImageCarousel = {
  __typename?: 'HeaderHeaderContentImageCarousel';
  image_carousel?: Maybe<ImageCarousel>;
};

export type HeaderHeaderContentImageCarouselWhere = {
  items?: InputMaybe<ImageCarouselItemsWhere>;
  items_exists?: InputMaybe<Scalars['Boolean']>;
};

export type HeaderHeaderContentWhere = {
  hero_image?: InputMaybe<HeaderHeaderContentHeroImageWhere>;
  hero_image_exists?: InputMaybe<Scalars['Boolean']>;
  image_carousel?: InputMaybe<HeaderHeaderContentImageCarouselWhere>;
  image_carousel_exists?: InputMaybe<Scalars['Boolean']>;
};

export enum HeaderOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type HeaderPrimaryNavigationConnection = {
  __typename?: 'HeaderPrimaryNavigationConnection';
  edges?: Maybe<Array<Maybe<HeaderPrimaryNavigationEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HeaderPrimaryNavigationEdge = {
  __typename?: 'HeaderPrimaryNavigationEdge';
  node?: Maybe<HeaderPrimaryNavigationNode>;
};

export type HeaderPrimaryNavigationNode = Menu;

export type HeaderPrimaryNavigationWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  menu?: InputMaybe<MenuWhere>;
};

export type HeaderWhere = {
  AND?: InputMaybe<Array<InputMaybe<HeaderWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  header_content?: InputMaybe<HeaderHeaderContentWhere>;
  header_content_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primary_navigation?: InputMaybe<HeaderPrimaryNavigationWhere>;
  primary_navigation_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type HeroImage = {
  __typename?: 'HeroImage';
  caption?: Maybe<Scalars['String']>;
  imageConnection?: Maybe<SysAssetConnection>;
};

export type Human = {
  __typename?: 'Human';
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoConnection?: Maybe<SysAssetConnection>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum HumanOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type HumanWhere = {
  AND?: InputMaybe<Array<InputMaybe<HumanWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<HumanWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_ne?: InputMaybe<Scalars['String']>;
  email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_exists?: InputMaybe<Scalars['Boolean']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_ne?: InputMaybe<Scalars['String']>;
  phone_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  photo?: InputMaybe<SysAssetWhere>;
  photo_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImageCarousel = {
  __typename?: 'ImageCarousel';
  items?: Maybe<Array<Maybe<ImageCarouselItems>>>;
};

export type ImageCarouselItems = {
  __typename?: 'ImageCarouselItems';
  caption?: Maybe<Scalars['String']>;
  imageConnection?: Maybe<SysAssetConnection>;
};

export type ImageCarouselItemsWhere = {
  caption?: InputMaybe<Scalars['String']>;
  caption_exists?: InputMaybe<Scalars['Boolean']>;
  caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  caption_ne?: InputMaybe<Scalars['String']>;
  caption_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image?: InputMaybe<SysAssetWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
};

export type Link = {
  __typename?: 'Link';
  href?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type LinkWhere = {
  href?: InputMaybe<Scalars['String']>;
  href_exists?: InputMaybe<Scalars['Boolean']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  href_ne?: InputMaybe<Scalars['String']>;
  href_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Menu = {
  __typename?: 'Menu';
  items?: Maybe<Array<Maybe<MenuItems>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export type MenuItems = {
  __typename?: 'MenuItems';
  label?: Maybe<Scalars['String']>;
  targetConnection?: Maybe<MenuItemsTargetConnection>;
  target_external?: Maybe<Link>;
};

export type MenuItemsTargetConnection = {
  __typename?: 'MenuItemsTargetConnection';
  edges?: Maybe<Array<Maybe<MenuItemsTargetEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MenuItemsTargetEdge = {
  __typename?: 'MenuItemsTargetEdge';
  node?: Maybe<MenuItemsTargetNode>;
};

export type MenuItemsTargetNode = Dog | Faq | Page;

export type MenuItemsTargetWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  dog?: InputMaybe<DogWhere>;
  faq?: InputMaybe<FaqWhere>;
  page?: InputMaybe<PageWhere>;
};

export type MenuItemsWhere = {
  label?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_ne?: InputMaybe<Scalars['String']>;
  label_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  target?: InputMaybe<MenuItemsTargetWhere>;
  target_exists?: InputMaybe<Scalars['Boolean']>;
  target_external?: InputMaybe<LinkWhere>;
  target_external_exists?: InputMaybe<Scalars['Boolean']>;
};

export enum MenuOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type MenuWhere = {
  AND?: InputMaybe<Array<InputMaybe<MenuWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  items?: InputMaybe<MenuItemsWhere>;
  items_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type Page = {
  __typename?: 'Page';
  featured_contentConnection?: Maybe<PageFeaturedContentConnection>;
  footerConnection?: Maybe<PageFooterConnection>;
  global_field?: Maybe<Seo>;
  headerConnection?: Maybe<PageHeaderConnection>;
  main_content?: Maybe<Array<Maybe<PageMainContent>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type PageFeaturedContentConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PageFeaturedContentConnection = {
  __typename?: 'PageFeaturedContentConnection';
  edges?: Maybe<Array<Maybe<PageFeaturedContentEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageFeaturedContentEdge = {
  __typename?: 'PageFeaturedContentEdge';
  node?: Maybe<PageFeaturedContentNode>;
};

export type PageFeaturedContentNode = Dog;

export type PageFeaturedContentWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  dog?: InputMaybe<DogWhere>;
};

export type PageFooterConnection = {
  __typename?: 'PageFooterConnection';
  edges?: Maybe<Array<Maybe<PageFooterEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageFooterEdge = {
  __typename?: 'PageFooterEdge';
  node?: Maybe<PageFooterNode>;
};

export type PageFooterNode = Footer;

export type PageFooterWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  footer?: InputMaybe<FooterWhere>;
};

export type PageHeaderConnection = {
  __typename?: 'PageHeaderConnection';
  edges?: Maybe<Array<Maybe<PageHeaderEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageHeaderEdge = {
  __typename?: 'PageHeaderEdge';
  node?: Maybe<PageHeaderNode>;
};

export type PageHeaderNode = Header;

export type PageHeaderWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  header?: InputMaybe<HeaderWhere>;
};

export type PageMainContent = PageMainContentMainCopy;

export type PageMainContentMainCopy = {
  __typename?: 'PageMainContentMainCopy';
  main_copy?: Maybe<PageMainContentMainCopyBlock>;
};

export type PageMainContentMainCopyBlock = {
  __typename?: 'PageMainContentMainCopyBlock';
  item?: Maybe<PageMainContentMainCopyBlockItem>;
  title?: Maybe<Scalars['String']>;
};

export type PageMainContentMainCopyBlockItem = {
  __typename?: 'PageMainContentMainCopyBlockItem';
  embedded_itemsConnection?: Maybe<PageMainContentMainCopyBlockItemEmbeddedItemsConnection>;
  json?: Maybe<Scalars['JSON']>;
};


export type PageMainContentMainCopyBlockItemEmbeddedItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PageMainContentMainCopyBlockItemEmbeddedItemsConnection = {
  __typename?: 'PageMainContentMainCopyBlockItemEmbeddedItemsConnection';
  edges?: Maybe<Array<Maybe<PageMainContentMainCopyBlockItemEmbeddedItemsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageMainContentMainCopyBlockItemEmbeddedItemsEdge = {
  __typename?: 'PageMainContentMainCopyBlockItemEmbeddedItemsEdge';
  node?: Maybe<PageMainContentMainCopyBlockItemEmbeddedItemsNode>;
};

export type PageMainContentMainCopyBlockItemEmbeddedItemsNode = SysAsset;

export type PageMainContentMainCopyBlockWhere = {
  item?: InputMaybe<Scalars['JSON']>;
  item_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageMainContentWhere = {
  main_copy?: InputMaybe<PageMainContentMainCopyBlockWhere>;
  main_copy_exists?: InputMaybe<Scalars['Boolean']>;
};

export enum PageOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type PageWhere = {
  AND?: InputMaybe<Array<InputMaybe<PageWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<PageWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  featured_content?: InputMaybe<PageFeaturedContentWhere>;
  featured_content_exists?: InputMaybe<Scalars['Boolean']>;
  footer?: InputMaybe<PageFooterWhere>;
  footer_exists?: InputMaybe<Scalars['Boolean']>;
  global_field?: InputMaybe<SeoWhere>;
  global_field_exists?: InputMaybe<Scalars['Boolean']>;
  header?: InputMaybe<PageHeaderWhere>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  main_content?: InputMaybe<PageMainContentWhere>;
  main_content_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  all_assets?: Maybe<AllSysAsset>;
  all_dog?: Maybe<AllDog>;
  all_faq?: Maybe<AllFaq>;
  all_footer?: Maybe<AllFooter>;
  all_global_settings?: Maybe<AllGlobalSettings>;
  all_header?: Maybe<AllHeader>;
  all_human?: Maybe<AllHuman>;
  all_menu?: Maybe<AllMenu>;
  all_page?: Maybe<AllPage>;
  assets?: Maybe<SysAsset>;
  dog?: Maybe<Dog>;
  faq?: Maybe<Faq>;
  footer?: Maybe<Footer>;
  global_settings?: Maybe<GlobalSettings>;
  header?: Maybe<Header>;
  human?: Maybe<Human>;
  menu?: Maybe<Menu>;
  page?: Maybe<Page>;
};


export type QueryAllAssetsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<SysAssetOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysAssetWhere>;
};


export type QueryAllDogArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<DogOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DogWhere>;
};


export type QueryAllFaqArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<FaqOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqWhere>;
};


export type QueryAllFooterArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<FooterOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterWhere>;
};


export type QueryAllGlobalSettingsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<GlobalSettingsOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GlobalSettingsWhere>;
};


export type QueryAllHeaderArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<HeaderOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeaderWhere>;
};


export type QueryAllHumanArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<HumanOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HumanWhere>;
};


export type QueryAllMenuArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<MenuOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuWhere>;
};


export type QueryAllPageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<PageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhere>;
};


export type QueryAssetsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  uid: Scalars['String'];
};


export type QueryDogArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryFaqArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryFooterArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryGlobalSettingsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryHeaderArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryHumanArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryMenuArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryPageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};

export type Seo = {
  __typename?: 'Seo';
  canonical?: Maybe<Link>;
  description?: Maybe<Scalars['String']>;
  nofollow?: Maybe<Scalars['Boolean']>;
  noindex?: Maybe<Scalars['Boolean']>;
  og_tags?: Maybe<Array<Maybe<SeoOgTags>>>;
  schema?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SeoOgTags = {
  __typename?: 'SeoOgTags';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SeoOgTagsWhere = {
  key?: InputMaybe<Scalars['String']>;
  key_exists?: InputMaybe<Scalars['Boolean']>;
  key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  key_ne?: InputMaybe<Scalars['String']>;
  key_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  value?: InputMaybe<Scalars['String']>;
  value_exists?: InputMaybe<Scalars['Boolean']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  value_ne?: InputMaybe<Scalars['String']>;
  value_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SeoWhere = {
  canonical?: InputMaybe<LinkWhere>;
  canonical_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_ne?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_ne?: InputMaybe<Scalars['Boolean']>;
  og_tags?: InputMaybe<SeoOgTagsWhere>;
  og_tags_exists?: InputMaybe<Scalars['Boolean']>;
  schema?: InputMaybe<Scalars['String']>;
  schema_exists?: InputMaybe<Scalars['Boolean']>;
  schema_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  schema_ne?: InputMaybe<Scalars['String']>;
  schema_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysAsset = {
  __typename?: 'SysAsset';
  content_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimension?: Maybe<SysAssetDimension>;
  file_size?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  system?: Maybe<SysAssetSystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type SysAssetUrlArgs = {
  transform?: InputMaybe<SysAssetTransformUrl>;
};

/** WEBP images are usually lower in size and have good quality. */
export enum SysAssetAutoValues {
  Webp = 'WEBP'
}

export type SysAssetConnection = {
  __typename?: 'SysAssetConnection';
  edges?: Maybe<Array<Maybe<SysAssetEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SysAssetDimension = {
  __typename?: 'SysAssetDimension';
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type SysAssetDimensionWhere = {
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_ne?: InputMaybe<Scalars['Int']>;
  height_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_ne?: InputMaybe<Scalars['Int']>;
  width_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum SysAssetDisableValues {
  /** UPSCALE is always enabled, in which the image is upscaled if the output image (by specifying the width or height) is bigger than the source image */
  Upscale = 'UPSCALE'
}

/** This parameter allows an image to be downloaded or rendered on page */
export enum SysAssetDispositionValues {
  /** Allows to download an image */
  Attachment = 'ATTACHMENT',
  /** Allows an image to be rendered on page */
  Inline = 'INLINE'
}

export type SysAssetEdge = {
  __typename?: 'SysAssetEdge';
  node?: Maybe<SysAsset>;
};

export enum SysAssetFitValues {
  Bounds = 'BOUNDS',
  Crop = 'CROP'
}

export enum SysAssetImageFormats {
  /** Convert an image to GIF format */
  Gif = 'GIF',
  /** Convert an image to JPEG format */
  Jpg = 'JPG',
  /** A Progressive JPEG is an image file created using a compression method that displays higher detail in progression */
  Pjpg = 'PJPG',
  /** Convert an image to PNG format */
  Png = 'PNG',
  /** WEBP images are usually lower in size and have good quality */
  Webp = 'WEBP',
  /** WEBP Lossless format */
  Webpll = 'WEBPLL',
  /** WEBP Lossy format */
  Webply = 'WEBPLY'
}

export enum SysAssetOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export enum SysAssetOrientValues {
  /** Flip image horizontally and vertically */
  Both = 'BOTH',
  /** Set image to default */
  Default = 'DEFAULT',
  /** Flip image horizontally */
  Horizontally = 'HORIZONTALLY',
  /** Flip image horizontally and then rotate 90 degrees towards left */
  Rotate90Left = 'ROTATE90LEFT',
  /** Rotate image 90 degrees towards right */
  Rotate90Right = 'ROTATE90RIGHT',
  /** Flip image vertically */
  Vertically = 'VERTICALLY'
}

/** The overlay_align parameter allows you to put one image on top of another */
export enum SysAssetOverlayAlignValues {
  /** Align the overlay image to the bottom of the actual image */
  Bottom = 'BOTTOM',
  /** Align the overlay image to the center (horizontally) of the actual image */
  Center = 'CENTER',
  /** Align the overlay image to the left of the actual image */
  Left = 'LEFT',
  /** Align the overlay image to the middle (vertically) of the actual image */
  Middle = 'MIDDLE',
  /** Align the overlay image to the right of the actual image */
  Right = 'RIGHT',
  /** Align the overlay image to the top of the actual image */
  Top = 'TOP'
}

export enum SysAssetOverlayRepeatValues {
  /** Horizontal and vertical repetition */
  Both = 'BOTH',
  /** Horizontal repetition */
  X = 'X',
  /** Vertical repetition */
  Y = 'Y'
}

export type SysAssetSystemField = {
  __typename?: 'SysAssetSystemField';
  branch?: Maybe<Scalars['String']>;
  content_type_uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  publish_details?: Maybe<SystemPublishDetails>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type SysAssetTransformUrl = {
  /** When the auto parameter is set to webp, it enables WebP image support. WebP images have higher compression rate with minimum loss of quality. */
  auto?: InputMaybe<SysAssetAutoValues>;
  /** The bg-color parameter lets you set a backgroud color for the given image. This is useful when applying padding or for replacing the transparent pixels of an image */
  bg_color?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Scalars['String']>;
  /** The disable parameter disables the functionality that is enabled by default */
  disable?: InputMaybe<SysAssetDisableValues>;
  /** The disposition parameter lets you allow image to download or render.  */
  disposition?: InputMaybe<SysAssetDispositionValues>;
  /** The dpr parameter lets you deliver images with appropriate size to devices that come with a defined device pixel ratio. The device pixel ratio of any device determines the screen resolution that its CSS would interpret */
  dpr?: InputMaybe<Scalars['String']>;
  /** Fit parameter enables you to fit the given image properly within the specified height and width */
  fit?: InputMaybe<SysAssetFitValues>;
  /** Format parameter lets you converts a given image from one format to another */
  format?: InputMaybe<SysAssetImageFormats>;
  height?: InputMaybe<Scalars['String']>;
  /** The orient parameter lets you control the cardinal orientation of the given image */
  orient?: InputMaybe<SysAssetOrientValues>;
  overlay?: InputMaybe<Scalars['String']>;
  overlay_align?: InputMaybe<SysAssetOverlayAlignValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When height is defined in percentage, it relative to the output image */
  overlay_height?: InputMaybe<Scalars['String']>;
  /** The overlay_repeat parameter lets you define how the overlay image will be repeated on the given image */
  overlay_repeat?: InputMaybe<SysAssetOverlayRepeatValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When width is defined in percentage, it is relative to the output image */
  overlay_width?: InputMaybe<Scalars['String']>;
  /** This parameter lets you add extra pixels to the edges of an image. You can specify values for top, right, bottom, and left padding for an image */
  pad?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

export type SysAssetWhere = {
  AND?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dimension?: InputMaybe<SysAssetDimensionWhere>;
  dimension_exists?: InputMaybe<Scalars['Boolean']>;
  file_size?: InputMaybe<Scalars['Int']>;
  file_size_exists?: InputMaybe<Scalars['Boolean']>;
  file_size_gt?: InputMaybe<Scalars['Int']>;
  file_size_gte?: InputMaybe<Scalars['Int']>;
  file_size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  file_size_lt?: InputMaybe<Scalars['Int']>;
  file_size_lte?: InputMaybe<Scalars['Int']>;
  file_size_ne?: InputMaybe<Scalars['Int']>;
  file_size_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filename?: InputMaybe<Scalars['String']>;
  filename_exists?: InputMaybe<Scalars['Boolean']>;
  filename_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename_ne?: InputMaybe<Scalars['String']>;
  filename_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags?: InputMaybe<Scalars['String']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SystemPublishDetails = {
  __typename?: 'SystemPublishDetails';
  environment?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
};

export type DogFieldsFragment = { __typename?: 'Dog', title?: string | null, url?: string | null, bio?: string | null, birthday?: any | null, breed?: string | null, dislikes?: Array<string | null> | null, favorite_color?: string | null, good_fetch_rating?: number | null, likes?: Array<string | null> | null, seeking?: Array<string | null> | null, spayed_neutered?: boolean | null, vax_status?: string | null, photoConnection?: { __typename?: 'SysAssetConnection', totalCount?: number | null, edges?: Array<{ __typename?: 'SysAssetEdge', node?: { __typename?: 'SysAsset', content_type?: string | null, description?: string | null, title?: string | null, url?: string | null, dimension?: { __typename?: 'SysAssetDimension', height?: number | null, width?: number | null } | null, system?: { __typename?: 'SysAssetSystemField', created_at?: any | null, uid?: string | null } | null } | null } | null> | null } | null, system?: { __typename?: 'EntrySystemField', created_at?: any | null, uid?: string | null } | null } & { ' $fragmentName'?: 'DogFieldsFragment' };

export type GlobalSettingsFieldsFragment = { __typename?: 'AllGlobalSettings', items?: Array<{ __typename?: 'GlobalSettings', attribution?: string | null, copyright?: string | null, site_title?: string | null, default_dog_imageConnection?: { __typename?: 'SysAssetConnection', edges?: Array<{ __typename?: 'SysAssetEdge', node?: { __typename?: 'SysAsset', url?: string | null, dimension?: { __typename?: 'SysAssetDimension', height?: number | null, width?: number | null } | null, system?: { __typename?: 'SysAssetSystemField', created_at?: any | null, uid?: string | null } | null } | null } | null> | null } | null, faviconConnection?: { __typename?: 'SysAssetConnection', edges?: Array<{ __typename?: 'SysAssetEdge', node?: { __typename?: 'SysAsset', url?: string | null, dimension?: { __typename?: 'SysAssetDimension', height?: number | null, width?: number | null } | null, system?: { __typename?: 'SysAssetSystemField', created_at?: any | null, uid?: string | null } | null } | null } | null> | null } | null, logoConnection?: { __typename?: 'SysAssetConnection', edges?: Array<{ __typename?: 'SysAssetEdge', node?: { __typename?: 'SysAsset', url?: string | null, dimension?: { __typename?: 'SysAssetDimension', height?: number | null, width?: number | null } | null, system?: { __typename?: 'SysAssetSystemField', created_at?: any | null, uid?: string | null } | null } | null } | null> | null } | null } | null> | null } & { ' $fragmentName'?: 'GlobalSettingsFieldsFragment' };

export type FetchGlobalSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchGlobalSettingsQuery = { __typename?: 'Query', all_global_settings?: (
    { __typename?: 'AllGlobalSettings' }
    & { ' $fragmentRefs'?: { 'GlobalSettingsFieldsFragment': GlobalSettingsFieldsFragment } }
  ) | null };

export type FetchPageQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type FetchPageQuery = { __typename?: 'Query', all_global_settings?: (
    { __typename?: 'AllGlobalSettings' }
    & { ' $fragmentRefs'?: { 'GlobalSettingsFieldsFragment': GlobalSettingsFieldsFragment } }
  ) | null, all_page?: { __typename?: 'AllPage', total?: number | null, items?: Array<{ __typename?: 'Page', title?: string | null, url?: string | null, global_field?: { __typename?: 'Seo', description?: string | null, nofollow?: boolean | null, noindex?: boolean | null, schema?: string | null, title?: string | null, canonical?: { __typename?: 'Link', href?: string | null, title?: string | null } | null, og_tags?: Array<{ __typename?: 'SeoOgTags', key?: string | null, value?: string | null } | null> | null } | null, main_content?: Array<{ __typename: 'PageMainContentMainCopy', main_copy?: { __typename?: 'PageMainContentMainCopyBlock', title?: string | null, item?: { __typename?: 'PageMainContentMainCopyBlockItem', json?: any | null } | null } | null } | null> | null, featured_contentConnection?: { __typename?: 'PageFeaturedContentConnection', edges?: Array<{ __typename?: 'PageFeaturedContentEdge', node?: (
            { __typename?: 'Dog' }
            & { ' $fragmentRefs'?: { 'DogFieldsFragment': DogFieldsFragment } }
          ) | null } | null> | null } | null, system?: { __typename?: 'EntrySystemField', created_at?: any | null, uid?: string | null } | null } | null> | null } | null };

export const DogFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DogFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"breed"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}},{"kind":"Field","name":{"kind":"Name","value":"favorite_color"}},{"kind":"Field","name":{"kind":"Name","value":"good_fetch_rating"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"seeking"}},{"kind":"Field","name":{"kind":"Name","value":"spayed_neutered"}},{"kind":"Field","name":{"kind":"Name","value":"vax_status"}},{"kind":"Field","name":{"kind":"Name","value":"photoConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content_type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode<DogFieldsFragment, unknown>;
export const GlobalSettingsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GlobalSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AllGlobalSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribution"}},{"kind":"Field","name":{"kind":"Name","value":"copyright"}},{"kind":"Field","name":{"kind":"Name","value":"default_dog_imageConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"faviconConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"site_title"}},{"kind":"Field","name":{"kind":"Name","value":"logoConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GlobalSettingsFieldsFragment, unknown>;
export const FetchGlobalSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchGlobalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"all_global_settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GlobalSettingsFields"}}]}}]}},...GlobalSettingsFieldsFragmentDoc.definitions]} as unknown as DocumentNode<FetchGlobalSettingsQuery, FetchGlobalSettingsQueryVariables>;
export const FetchPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"all_global_settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GlobalSettingsFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"all_page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"global_field"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canonical"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"nofollow"}},{"kind":"Field","name":{"kind":"Name","value":"noindex"}},{"kind":"Field","name":{"kind":"Name","value":"og_tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"schema"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"main_content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentMainCopy"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"main_copy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featured_contentConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DogFields"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]}},...GlobalSettingsFieldsFragmentDoc.definitions,...DogFieldsFragmentDoc.definitions]} as unknown as DocumentNode<FetchPageQuery, FetchPageQueryVariables>;