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
  GetUsersPermissionsPermissions200,
  Error,
  GetUsersPermissionsRolesId200,
  GetUsersPermissionsRoles200,
  PostUsersPermissionsRoles200,
  UsersPermissionsRoleRequestBody,
  PutUsersPermissionsRolesRole200,
  DeleteUsersPermissionsRolesRole200,
  UsersPermissionsUser,
  PostUsers201,
  PostUsersBody,
  PutUsersId200,
  PutUsersIdBody
} from '../../model'


/**
 * @summary Get default generated permissions
 */
export const getUsersPermissionsPermissions = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetUsersPermissionsPermissions200>> => {
    return axios.get(
      `/users-permissions/permissions`,options
    );
  }


export const getGetUsersPermissionsPermissionsQueryKey = () => [`/users-permissions/permissions`] as const;
  

    
export const getGetUsersPermissionsPermissionsInfiniteQueryOptions = <TData = Awaited<ReturnType<typeof getUsersPermissionsPermissions>>, TError = AxiosError<Error>>( options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsPermissions>>, TError, TData>, axios?: AxiosRequestConfig}
): UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsPermissions>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersPermissionsPermissionsQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersPermissionsPermissions>>> = ({ signal }) => getUsersPermissionsPermissions({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions}}

export type GetUsersPermissionsPermissionsInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersPermissionsPermissions>>>
export type GetUsersPermissionsPermissionsInfiniteQueryError = AxiosError<Error>

/**
 * @summary Get default generated permissions
 */
export const useGetUsersPermissionsPermissionsInfinite = <TData = Awaited<ReturnType<typeof getUsersPermissionsPermissions>>, TError = AxiosError<Error>>(
  options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsPermissions>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersPermissionsPermissionsInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const getGetUsersPermissionsPermissionsQueryOptions = <TData = Awaited<ReturnType<typeof getUsersPermissionsPermissions>>, TError = AxiosError<Error>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsPermissions>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsPermissions>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersPermissionsPermissionsQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersPermissionsPermissions>>> = ({ signal }) => getUsersPermissionsPermissions({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions}}

export type GetUsersPermissionsPermissionsQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersPermissionsPermissions>>>
export type GetUsersPermissionsPermissionsQueryError = AxiosError<Error>

/**
 * @summary Get default generated permissions
 */
export const useGetUsersPermissionsPermissions = <TData = Awaited<ReturnType<typeof getUsersPermissionsPermissions>>, TError = AxiosError<Error>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsPermissions>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersPermissionsPermissionsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary Get a role
 */
export const getUsersPermissionsRolesId = (
    id: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetUsersPermissionsRolesId200>> => {
    return axios.get(
      `/users-permissions/roles/${id}`,options
    );
  }


export const getGetUsersPermissionsRolesIdQueryKey = (id: string,) => [`/users-permissions/roles/${id}`] as const;
  

    
export const getGetUsersPermissionsRolesIdInfiniteQueryOptions = <TData = Awaited<ReturnType<typeof getUsersPermissionsRolesId>>, TError = AxiosError<Error>>(id: string, options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsRolesId>>, TError, TData>, axios?: AxiosRequestConfig}
): UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsRolesId>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersPermissionsRolesIdQueryKey(id);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersPermissionsRolesId>>> = ({ signal }) => getUsersPermissionsRolesId(id, { signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, enabled: !!(id),  staleTime: 10000,  ...queryOptions}}

export type GetUsersPermissionsRolesIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersPermissionsRolesId>>>
export type GetUsersPermissionsRolesIdInfiniteQueryError = AxiosError<Error>

/**
 * @summary Get a role
 */
export const useGetUsersPermissionsRolesIdInfinite = <TData = Awaited<ReturnType<typeof getUsersPermissionsRolesId>>, TError = AxiosError<Error>>(
 id: string, options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsRolesId>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersPermissionsRolesIdInfiniteQueryOptions(id,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const getGetUsersPermissionsRolesIdQueryOptions = <TData = Awaited<ReturnType<typeof getUsersPermissionsRolesId>>, TError = AxiosError<Error>>(id: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsRolesId>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsRolesId>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersPermissionsRolesIdQueryKey(id);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersPermissionsRolesId>>> = ({ signal }) => getUsersPermissionsRolesId(id, { signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, enabled: !!(id),  staleTime: 10000,  ...queryOptions}}

export type GetUsersPermissionsRolesIdQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersPermissionsRolesId>>>
export type GetUsersPermissionsRolesIdQueryError = AxiosError<Error>

/**
 * @summary Get a role
 */
export const useGetUsersPermissionsRolesId = <TData = Awaited<ReturnType<typeof getUsersPermissionsRolesId>>, TError = AxiosError<Error>>(
 id: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsRolesId>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersPermissionsRolesIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary List roles
 */
export const getUsersPermissionsRoles = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetUsersPermissionsRoles200>> => {
    return axios.get(
      `/users-permissions/roles`,options
    );
  }


export const getGetUsersPermissionsRolesQueryKey = () => [`/users-permissions/roles`] as const;
  

    
export const getGetUsersPermissionsRolesInfiniteQueryOptions = <TData = Awaited<ReturnType<typeof getUsersPermissionsRoles>>, TError = AxiosError<Error>>( options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsRoles>>, TError, TData>, axios?: AxiosRequestConfig}
): UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsRoles>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersPermissionsRolesQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersPermissionsRoles>>> = ({ signal }) => getUsersPermissionsRoles({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions}}

export type GetUsersPermissionsRolesInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersPermissionsRoles>>>
export type GetUsersPermissionsRolesInfiniteQueryError = AxiosError<Error>

/**
 * @summary List roles
 */
export const useGetUsersPermissionsRolesInfinite = <TData = Awaited<ReturnType<typeof getUsersPermissionsRoles>>, TError = AxiosError<Error>>(
  options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsRoles>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersPermissionsRolesInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const getGetUsersPermissionsRolesQueryOptions = <TData = Awaited<ReturnType<typeof getUsersPermissionsRoles>>, TError = AxiosError<Error>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsRoles>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsRoles>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersPermissionsRolesQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersPermissionsRoles>>> = ({ signal }) => getUsersPermissionsRoles({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions}}

export type GetUsersPermissionsRolesQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersPermissionsRoles>>>
export type GetUsersPermissionsRolesQueryError = AxiosError<Error>

/**
 * @summary List roles
 */
export const useGetUsersPermissionsRoles = <TData = Awaited<ReturnType<typeof getUsersPermissionsRoles>>, TError = AxiosError<Error>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsersPermissionsRoles>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersPermissionsRolesQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary Create a role
 */
export const postUsersPermissionsRoles = (
    usersPermissionsRoleRequestBody: UsersPermissionsRoleRequestBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PostUsersPermissionsRoles200>> => {
    return axios.post(
      `/users-permissions/roles`,
      usersPermissionsRoleRequestBody,options
    );
  }



export const getPostUsersPermissionsRolesMutationOptions = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postUsersPermissionsRoles>>, TError,{data: UsersPermissionsRoleRequestBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postUsersPermissionsRoles>>, TError,{data: UsersPermissionsRoleRequestBody}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postUsersPermissionsRoles>>, {data: UsersPermissionsRoleRequestBody}> = (props) => {
          const {data} = props ?? {};

          return  postUsersPermissionsRoles(data,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostUsersPermissionsRolesMutationResult = NonNullable<Awaited<ReturnType<typeof postUsersPermissionsRoles>>>
    export type PostUsersPermissionsRolesMutationBody = UsersPermissionsRoleRequestBody
    export type PostUsersPermissionsRolesMutationError = AxiosError<Error>

    /**
 * @summary Create a role
 */
export const usePostUsersPermissionsRoles = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postUsersPermissionsRoles>>, TError,{data: UsersPermissionsRoleRequestBody}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getPostUsersPermissionsRolesMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * @summary Update a role
 */
export const putUsersPermissionsRolesRole = (
    role: string,
    usersPermissionsRoleRequestBody: UsersPermissionsRoleRequestBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PutUsersPermissionsRolesRole200>> => {
    return axios.put(
      `/users-permissions/roles/${role}`,
      usersPermissionsRoleRequestBody,options
    );
  }



export const getPutUsersPermissionsRolesRoleMutationOptions = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putUsersPermissionsRolesRole>>, TError,{role: string;data: UsersPermissionsRoleRequestBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof putUsersPermissionsRolesRole>>, TError,{role: string;data: UsersPermissionsRoleRequestBody}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putUsersPermissionsRolesRole>>, {role: string;data: UsersPermissionsRoleRequestBody}> = (props) => {
          const {role,data} = props ?? {};

          return  putUsersPermissionsRolesRole(role,data,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PutUsersPermissionsRolesRoleMutationResult = NonNullable<Awaited<ReturnType<typeof putUsersPermissionsRolesRole>>>
    export type PutUsersPermissionsRolesRoleMutationBody = UsersPermissionsRoleRequestBody
    export type PutUsersPermissionsRolesRoleMutationError = AxiosError<Error>

    /**
 * @summary Update a role
 */
export const usePutUsersPermissionsRolesRole = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putUsersPermissionsRolesRole>>, TError,{role: string;data: UsersPermissionsRoleRequestBody}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getPutUsersPermissionsRolesRoleMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * @summary Delete a role
 */
export const deleteUsersPermissionsRolesRole = (
    role: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<DeleteUsersPermissionsRolesRole200>> => {
    return axios.delete(
      `/users-permissions/roles/${role}`,options
    );
  }



export const getDeleteUsersPermissionsRolesRoleMutationOptions = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteUsersPermissionsRolesRole>>, TError,{role: string}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof deleteUsersPermissionsRolesRole>>, TError,{role: string}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteUsersPermissionsRolesRole>>, {role: string}> = (props) => {
          const {role} = props ?? {};

          return  deleteUsersPermissionsRolesRole(role,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type DeleteUsersPermissionsRolesRoleMutationResult = NonNullable<Awaited<ReturnType<typeof deleteUsersPermissionsRolesRole>>>
    
    export type DeleteUsersPermissionsRolesRoleMutationError = AxiosError<Error>

    /**
 * @summary Delete a role
 */
export const useDeleteUsersPermissionsRolesRole = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteUsersPermissionsRolesRole>>, TError,{role: string}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getDeleteUsersPermissionsRolesRoleMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * @summary Get user count
 */
export const getUsersCount = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<number>> => {
    return axios.get(
      `/users/count`,options
    );
  }


export const getGetUsersCountQueryKey = () => [`/users/count`] as const;
  

    
export const getGetUsersCountInfiniteQueryOptions = <TData = Awaited<ReturnType<typeof getUsersCount>>, TError = AxiosError<Error>>( options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersCount>>, TError, TData>, axios?: AxiosRequestConfig}
): UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersCount>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersCountQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersCount>>> = ({ signal }) => getUsersCount({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions}}

export type GetUsersCountInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersCount>>>
export type GetUsersCountInfiniteQueryError = AxiosError<Error>

/**
 * @summary Get user count
 */
export const useGetUsersCountInfinite = <TData = Awaited<ReturnType<typeof getUsersCount>>, TError = AxiosError<Error>>(
  options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersCount>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersCountInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const getGetUsersCountQueryOptions = <TData = Awaited<ReturnType<typeof getUsersCount>>, TError = AxiosError<Error>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsersCount>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getUsersCount>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersCountQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersCount>>> = ({ signal }) => getUsersCount({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions}}

export type GetUsersCountQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersCount>>>
export type GetUsersCountQueryError = AxiosError<Error>

/**
 * @summary Get user count
 */
export const useGetUsersCount = <TData = Awaited<ReturnType<typeof getUsersCount>>, TError = AxiosError<Error>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsersCount>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersCountQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary Get list of users
 */
export const getUsers = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UsersPermissionsUser[]>> => {
    return axios.get(
      `/users`,options
    );
  }


export const getGetUsersQueryKey = () => [`/users`] as const;
  

    
export const getGetUsersInfiniteQueryOptions = <TData = Awaited<ReturnType<typeof getUsers>>, TError = AxiosError<Error>>( options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>, axios?: AxiosRequestConfig}
): UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsers>>> = ({ signal }) => getUsers({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions}}

export type GetUsersInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getUsers>>>
export type GetUsersInfiniteQueryError = AxiosError<Error>

/**
 * @summary Get list of users
 */
export const useGetUsersInfinite = <TData = Awaited<ReturnType<typeof getUsers>>, TError = AxiosError<Error>>(
  options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const getGetUsersQueryOptions = <TData = Awaited<ReturnType<typeof getUsers>>, TError = AxiosError<Error>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsers>>> = ({ signal }) => getUsers({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions}}

export type GetUsersQueryResult = NonNullable<Awaited<ReturnType<typeof getUsers>>>
export type GetUsersQueryError = AxiosError<Error>

/**
 * @summary Get list of users
 */
export const useGetUsers = <TData = Awaited<ReturnType<typeof getUsers>>, TError = AxiosError<Error>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary Create a user
 */
export const postUsers = (
    postUsersBody: PostUsersBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PostUsers201>> => {
    return axios.post(
      `/users`,
      postUsersBody,options
    );
  }



export const getPostUsersMutationOptions = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postUsers>>, TError,{data: PostUsersBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postUsers>>, TError,{data: PostUsersBody}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postUsers>>, {data: PostUsersBody}> = (props) => {
          const {data} = props ?? {};

          return  postUsers(data,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostUsersMutationResult = NonNullable<Awaited<ReturnType<typeof postUsers>>>
    export type PostUsersMutationBody = PostUsersBody
    export type PostUsersMutationError = AxiosError<Error>

    /**
 * @summary Create a user
 */
export const usePostUsers = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postUsers>>, TError,{data: PostUsersBody}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getPostUsersMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * @summary Get authenticated user info
 */
export const getUsersMe = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UsersPermissionsUser>> => {
    return axios.get(
      `/users/me`,options
    );
  }


export const getGetUsersMeQueryKey = () => [`/users/me`] as const;
  

    
export const getGetUsersMeInfiniteQueryOptions = <TData = Awaited<ReturnType<typeof getUsersMe>>, TError = AxiosError<Error>>( options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersMe>>, TError, TData>, axios?: AxiosRequestConfig}
): UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersMe>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersMeQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersMe>>> = ({ signal }) => getUsersMe({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions}}

export type GetUsersMeInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersMe>>>
export type GetUsersMeInfiniteQueryError = AxiosError<Error>

/**
 * @summary Get authenticated user info
 */
export const useGetUsersMeInfinite = <TData = Awaited<ReturnType<typeof getUsersMe>>, TError = AxiosError<Error>>(
  options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersMe>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersMeInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const getGetUsersMeQueryOptions = <TData = Awaited<ReturnType<typeof getUsersMe>>, TError = AxiosError<Error>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsersMe>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getUsersMe>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersMeQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersMe>>> = ({ signal }) => getUsersMe({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions}}

export type GetUsersMeQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersMe>>>
export type GetUsersMeQueryError = AxiosError<Error>

/**
 * @summary Get authenticated user info
 */
export const useGetUsersMe = <TData = Awaited<ReturnType<typeof getUsersMe>>, TError = AxiosError<Error>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsersMe>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersMeQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary Get a user
 */
export const getUsersId = (
    id: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UsersPermissionsUser>> => {
    return axios.get(
      `/users/${id}`,options
    );
  }


export const getGetUsersIdQueryKey = (id: string,) => [`/users/${id}`] as const;
  

    
export const getGetUsersIdInfiniteQueryOptions = <TData = Awaited<ReturnType<typeof getUsersId>>, TError = AxiosError<Error>>(id: string, options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersId>>, TError, TData>, axios?: AxiosRequestConfig}
): UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersId>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersIdQueryKey(id);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersId>>> = ({ signal }) => getUsersId(id, { signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, enabled: !!(id),  staleTime: 10000,  ...queryOptions}}

export type GetUsersIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersId>>>
export type GetUsersIdInfiniteQueryError = AxiosError<Error>

/**
 * @summary Get a user
 */
export const useGetUsersIdInfinite = <TData = Awaited<ReturnType<typeof getUsersId>>, TError = AxiosError<Error>>(
 id: string, options?: { query?:UseInfiniteQueryOptions<Awaited<ReturnType<typeof getUsersId>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersIdInfiniteQueryOptions(id,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

export const getGetUsersIdQueryOptions = <TData = Awaited<ReturnType<typeof getUsersId>>, TError = AxiosError<Error>>(id: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsersId>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getUsersId>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersIdQueryKey(id);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersId>>> = ({ signal }) => getUsersId(id, { signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, enabled: !!(id),  staleTime: 10000,  ...queryOptions}}

export type GetUsersIdQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersId>>>
export type GetUsersIdQueryError = AxiosError<Error>

/**
 * @summary Get a user
 */
export const useGetUsersId = <TData = Awaited<ReturnType<typeof getUsersId>>, TError = AxiosError<Error>>(
 id: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUsersId>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary Update a user
 */
export const putUsersId = (
    id: string,
    putUsersIdBody: PutUsersIdBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PutUsersId200>> => {
    return axios.put(
      `/users/${id}`,
      putUsersIdBody,options
    );
  }



export const getPutUsersIdMutationOptions = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putUsersId>>, TError,{id: string;data: PutUsersIdBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof putUsersId>>, TError,{id: string;data: PutUsersIdBody}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putUsersId>>, {id: string;data: PutUsersIdBody}> = (props) => {
          const {id,data} = props ?? {};

          return  putUsersId(id,data,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PutUsersIdMutationResult = NonNullable<Awaited<ReturnType<typeof putUsersId>>>
    export type PutUsersIdMutationBody = PutUsersIdBody
    export type PutUsersIdMutationError = AxiosError<Error>

    /**
 * @summary Update a user
 */
export const usePutUsersId = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putUsersId>>, TError,{id: string;data: PutUsersIdBody}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getPutUsersIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * @summary Delete a user
 */
export const deleteUsersId = (
    id: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UsersPermissionsUser>> => {
    return axios.delete(
      `/users/${id}`,options
    );
  }



export const getDeleteUsersIdMutationOptions = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteUsersId>>, TError,{id: string}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof deleteUsersId>>, TError,{id: string}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteUsersId>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteUsersId(id,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type DeleteUsersIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteUsersId>>>
    
    export type DeleteUsersIdMutationError = AxiosError<Error>

    /**
 * @summary Delete a user
 */
export const useDeleteUsersId = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteUsersId>>, TError,{id: string}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getDeleteUsersIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    