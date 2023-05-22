import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID'];
  countries: Array<Country>;
  name: Scalars['String'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  capital?: Maybe<Scalars['String']>;
  code: Scalars['ID'];
  continent: Continent;
  currency?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  languages: Array<Language>;
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  states: Array<State>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type QueryContinentArgs = {
  code: Scalars['ID'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  country: Country;
  name: Scalars['String'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type GetContinentQueryVariables = Exact<{
  code: Scalars['ID'];
}>;


export type GetContinentQuery = { __typename?: 'Query', continent?: { __typename?: 'Continent', code: string, countries: Array<{ __typename?: 'Country', code: string, name: string, emoji: string }> } | null };

export type GetContinentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContinentsQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', code: string, name: string, countries: Array<{ __typename?: 'Country', code: string, name: string }> }> };

export type GetCountryQueryVariables = Exact<{
  code: Scalars['ID'];
}>;


export type GetCountryQuery = { __typename?: 'Query', country?: { __typename?: 'Country', code: string, emoji: string, name: string, currency?: string | null, capital?: string | null } | null };


export const GetContinentDocument = gql`
    query getContinent($code: ID!) {
  continent(code: $code) {
    code
    countries {
      code
      name
      emoji
    }
  }
}
    `;

/**
 * __useGetContinentQuery__
 *
 * To run a query within a React component, call `useGetContinentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContinentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContinentQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetContinentQuery(baseOptions: Apollo.QueryHookOptions<GetContinentQuery, GetContinentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContinentQuery, GetContinentQueryVariables>(GetContinentDocument, options);
      }
export function useGetContinentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContinentQuery, GetContinentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContinentQuery, GetContinentQueryVariables>(GetContinentDocument, options);
        }
export type GetContinentQueryHookResult = ReturnType<typeof useGetContinentQuery>;
export type GetContinentLazyQueryHookResult = ReturnType<typeof useGetContinentLazyQuery>;
export type GetContinentQueryResult = Apollo.QueryResult<GetContinentQuery, GetContinentQueryVariables>;
export const GetContinentsDocument = gql`
    query getContinents {
  continents {
    code
    name
    countries {
      code
      name
    }
  }
}
    `;

/**
 * __useGetContinentsQuery__
 *
 * To run a query within a React component, call `useGetContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContinentsQuery(baseOptions?: Apollo.QueryHookOptions<GetContinentsQuery, GetContinentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContinentsQuery, GetContinentsQueryVariables>(GetContinentsDocument, options);
      }
export function useGetContinentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContinentsQuery, GetContinentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContinentsQuery, GetContinentsQueryVariables>(GetContinentsDocument, options);
        }
export type GetContinentsQueryHookResult = ReturnType<typeof useGetContinentsQuery>;
export type GetContinentsLazyQueryHookResult = ReturnType<typeof useGetContinentsLazyQuery>;
export type GetContinentsQueryResult = Apollo.QueryResult<GetContinentsQuery, GetContinentsQueryVariables>;
export const GetCountryDocument = gql`
    query getCountry($code: ID!) {
  country(code: $code) {
    code
    emoji
    name
    currency
    capital
  }
}
    `;

/**
 * __useGetCountryQuery__
 *
 * To run a query within a React component, call `useGetCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetCountryQuery(baseOptions: Apollo.QueryHookOptions<GetCountryQuery, GetCountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountryQuery, GetCountryQueryVariables>(GetCountryDocument, options);
      }
export function useGetCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountryQuery, GetCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountryQuery, GetCountryQueryVariables>(GetCountryDocument, options);
        }
export type GetCountryQueryHookResult = ReturnType<typeof useGetCountryQuery>;
export type GetCountryLazyQueryHookResult = ReturnType<typeof useGetCountryLazyQuery>;
export type GetCountryQueryResult = Apollo.QueryResult<GetCountryQuery, GetCountryQueryVariables>;