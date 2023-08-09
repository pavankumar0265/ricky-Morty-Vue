import axiosClient from "../axiosClient";

export async function fetchApiData({ commit }){
        try {
            const response = await axiosClient.get('');
            commit("setApiData",response)
        }
        catch(error){
            console.log(error)
        }
}

export async function fetchRickMortyApiByPageNumber({commit},pageNumber) {
    try {
        const res = await axiosClient.get(`?page=${pageNumber.value+1}`)
        commit('setRickMortyApiByPageNumber',res)
    }catch(error){
        commit('setErrorMessage',error.message);
        console.log(error)
    }
}

export async function fetchCharacterById({commit},id) {
    try {
        const response = await axiosClient.get(id)
        commit('setCharacterById',response)
    }catch(error){
        commit('setErrorMessage',error.message)
        console.log(error)
    }
}