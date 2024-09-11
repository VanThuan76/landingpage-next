import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../http-client";

import { IBaseResponse } from "../_types/base";
import { IGetExample } from "../_types/example-type";

import EXAMPLE_PATHS from "../_paths/example-path";

export const useGetExample = () => {
    const queryFn = async (): Promise<IGetExample[]> => {
        const response = await axiosInstance.get<IBaseResponse<IGetExample[]>>(EXAMPLE_PATHS.GET_ALL);
        return response.data;
    };

    return useQuery<IGetExample[], Error>({
        queryKey: ['EXAMPLE_PATHS', 'GET_ALL'],
        queryFn: queryFn,
    });
};
