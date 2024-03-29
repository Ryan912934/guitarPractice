/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  SongListResponse,
  Error,
  GetSongsParams,
  SongResponse,
  SongRequest
} from '../../model'


export const getSongs = (
    params?: GetSongsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<SongListResponse>> => {
    return axios.get(
      `/songs`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getGetSongsQueryKey = (params?: GetSongsParams,) => [`/songs`, ...(params ? [params]: [])] as const;
  

    
export const getGetSongsQueryOptions = <TData = Awaited<ReturnType<typeof getSongs>>, TError = AxiosError<Error>>(params?: GetSongsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getSongs>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getSongs>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetSongsQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getSongs>>> = ({ signal }) => getSongs(params, { signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetSongsQueryResult = NonNullable<Awaited<ReturnType<typeof getSongs>>>
export type GetSongsQueryError = AxiosError<Error>

export const useGetSongs = <TData = Awaited<ReturnType<typeof getSongs>>, TError = AxiosError<Error>>(
 params?: GetSongsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getSongs>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetSongsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const postSongs = (
    songRequest: SongRequest, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<SongResponse>> => {
    return axios.post(
      `/songs`,
      songRequest,options
    );
  }



export const getPostSongsMutationOptions = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postSongs>>, TError,{data: SongRequest}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postSongs>>, TError,{data: SongRequest}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postSongs>>, {data: SongRequest}> = (props) => {
          const {data} = props ?? {};

          return  postSongs(data,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostSongsMutationResult = NonNullable<Awaited<ReturnType<typeof postSongs>>>
    export type PostSongsMutationBody = SongRequest
    export type PostSongsMutationError = AxiosError<Error>

    export const usePostSongs = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postSongs>>, TError,{data: SongRequest}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getPostSongsMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    export const getSongsId = (
    id: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<SongResponse>> => {
    return axios.get(
      `/songs/${id}`,options
    );
  }


export const getGetSongsIdQueryKey = (id: number,) => [`/songs/${id}`] as const;
  

    
export const getGetSongsIdQueryOptions = <TData = Awaited<ReturnType<typeof getSongsId>>, TError = AxiosError<Error>>(id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getSongsId>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getSongsId>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetSongsIdQueryKey(id);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getSongsId>>> = ({ signal }) => getSongsId(id, { signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions}}

export type GetSongsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getSongsId>>>
export type GetSongsIdQueryError = AxiosError<Error>

export const useGetSongsId = <TData = Awaited<ReturnType<typeof getSongsId>>, TError = AxiosError<Error>>(
 id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getSongsId>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetSongsIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const putSongsId = (
    id: number,
    songRequest: SongRequest, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<SongResponse>> => {
    return axios.put(
      `/songs/${id}`,
      songRequest,options
    );
  }



export const getPutSongsIdMutationOptions = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putSongsId>>, TError,{id: number;data: SongRequest}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof putSongsId>>, TError,{id: number;data: SongRequest}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putSongsId>>, {id: number;data: SongRequest}> = (props) => {
          const {id,data} = props ?? {};

          return  putSongsId(id,data,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PutSongsIdMutationResult = NonNullable<Awaited<ReturnType<typeof putSongsId>>>
    export type PutSongsIdMutationBody = SongRequest
    export type PutSongsIdMutationError = AxiosError<Error>

    export const usePutSongsId = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putSongsId>>, TError,{id: number;data: SongRequest}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getPutSongsIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    export const deleteSongsId = (
    id: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<number>> => {
    return axios.delete(
      `/songs/${id}`,options
    );
  }



export const getDeleteSongsIdMutationOptions = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteSongsId>>, TError,{id: number}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof deleteSongsId>>, TError,{id: number}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteSongsId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteSongsId(id,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type DeleteSongsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteSongsId>>>
    
    export type DeleteSongsIdMutationError = AxiosError<Error>

    export const useDeleteSongsId = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteSongsId>>, TError,{id: number}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getDeleteSongsIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    