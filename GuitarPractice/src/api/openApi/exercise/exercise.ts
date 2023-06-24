/**
 * Generated by orval v6.16.0 🍺
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
  useInfiniteQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  UseInfiniteQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  ExerciseResponse,
  Error,
  ExerciseRequest
} from '../../model'


export const getExercises = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ExerciseResponse>> => {
    return axios.get(
      `/exercises`,options
    );
  }


export const getGetExercisesQueryKey = () => [`/exercises`] as const;
  

    
export const getGetExercisesInfiniteQueryOptions = <TData = Awaited<ReturnType<typeof getExercises>>, TError = AxiosError<Error>>( options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getExercises>>, TError, TData>, axios?: AxiosRequestConfig}
): UseInfiniteQueryOptions<Awaited<ReturnType<typeof getExercises>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetExercisesQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getExercises>>> = ({ signal }) => getExercises({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions}}

export type GetExercisesInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getExercises>>>
export type GetExercisesInfiniteQueryError = AxiosError<Error>

export const useGetExercisesInfinite = <TData = Awaited<ReturnType<typeof getExercises>>, TError = AxiosError<Error>>(
  options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getExercises>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetExercisesInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const getGetExercisesQueryOptions = <TData = Awaited<ReturnType<typeof getExercises>>, TError = AxiosError<Error>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getExercises>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getExercises>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetExercisesQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getExercises>>> = ({ signal }) => getExercises({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions}}

export type GetExercisesQueryResult = NonNullable<Awaited<ReturnType<typeof getExercises>>>
export type GetExercisesQueryError = AxiosError<Error>

export const useGetExercises = <TData = Awaited<ReturnType<typeof getExercises>>, TError = AxiosError<Error>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getExercises>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetExercisesQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const getExerciseId = (
    id: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ExerciseResponse>> => {
    return axios.get(
      `/exercise/${id}`,options
    );
  }


export const getGetExerciseIdQueryKey = (id: number,) => [`/exercise/${id}`] as const;
  

    
export const getGetExerciseIdInfiniteQueryOptions = <TData = Awaited<ReturnType<typeof getExerciseId>>, TError = AxiosError<Error>>(id: number, options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getExerciseId>>, TError, TData>, axios?: AxiosRequestConfig}
): UseInfiniteQueryOptions<Awaited<ReturnType<typeof getExerciseId>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetExerciseIdQueryKey(id);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getExerciseId>>> = ({ signal }) => getExerciseId(id, { signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, enabled: !!(id),  staleTime: 10000,  ...queryOptions}}

export type GetExerciseIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getExerciseId>>>
export type GetExerciseIdInfiniteQueryError = AxiosError<Error>

export const useGetExerciseIdInfinite = <TData = Awaited<ReturnType<typeof getExerciseId>>, TError = AxiosError<Error>>(
 id: number, options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getExerciseId>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetExerciseIdInfiniteQueryOptions(id,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const getGetExerciseIdQueryOptions = <TData = Awaited<ReturnType<typeof getExerciseId>>, TError = AxiosError<Error>>(id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getExerciseId>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getExerciseId>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetExerciseIdQueryKey(id);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getExerciseId>>> = ({ signal }) => getExerciseId(id, { signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, enabled: !!(id),  staleTime: 10000,  ...queryOptions}}

export type GetExerciseIdQueryResult = NonNullable<Awaited<ReturnType<typeof getExerciseId>>>
export type GetExerciseIdQueryError = AxiosError<Error>

export const useGetExerciseId = <TData = Awaited<ReturnType<typeof getExerciseId>>, TError = AxiosError<Error>>(
 id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getExerciseId>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetExerciseIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const postExerciseId = (
    id: number,
    exerciseRequest: ExerciseRequest, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ExerciseResponse>> => {
    return axios.post(
      `/exercise/${id}`,
      exerciseRequest,options
    );
  }



export const getPostExerciseIdMutationOptions = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postExerciseId>>, TError,{id: number;data: ExerciseRequest}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postExerciseId>>, TError,{id: number;data: ExerciseRequest}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postExerciseId>>, {id: number;data: ExerciseRequest}> = (props) => {
          const {id,data} = props ?? {};

          return  postExerciseId(id,data,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostExerciseIdMutationResult = NonNullable<Awaited<ReturnType<typeof postExerciseId>>>
    export type PostExerciseIdMutationBody = ExerciseRequest
    export type PostExerciseIdMutationError = AxiosError<Error>

    export const usePostExerciseId = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postExerciseId>>, TError,{id: number;data: ExerciseRequest}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getPostExerciseIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    export const postExercise = (
    exerciseRequest: ExerciseRequest, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ExerciseResponse>> => {
    return axios.post(
      `/exercise`,
      exerciseRequest,options
    );
  }



export const getPostExerciseMutationOptions = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postExercise>>, TError,{data: ExerciseRequest}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postExercise>>, TError,{data: ExerciseRequest}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postExercise>>, {data: ExerciseRequest}> = (props) => {
          const {data} = props ?? {};

          return  postExercise(data,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostExerciseMutationResult = NonNullable<Awaited<ReturnType<typeof postExercise>>>
    export type PostExerciseMutationBody = ExerciseRequest
    export type PostExerciseMutationError = AxiosError<Error>

    export const usePostExercise = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postExercise>>, TError,{data: ExerciseRequest}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getPostExerciseMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    