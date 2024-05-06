import { useCallback, useContext, useEffect } from "react";
import useAsync from "../Hooks/useAsync";
import Skeleton from "../Componenets/Skeleton";
import ProductComponenet from "../Componenets/ProductComponenet";
import AsyncHOC from "../HOC/AsyncHOC";
import useFilter from "../Hooks/useFilter";
import { debounce } from "lodash";

function ProductPage() {
  const { loading, data, getData, error } = useAsync("products/");
  const { parseUrl, onChangeFilter, stringfyUrl } = useFilter();

  const getDataWithDebounce = useCallback(
    debounce(() => {
      getData(window.location.search);
    }, 500),
    []
  );

  useEffect(() => {
    getDataWithDebounce(window.location.search);
  }, [window.location.search]);

  const LoadingComponenet = () => {
    return (
      <div className="flex justify-between flex-wrap">
        {Array.from(Array(20)).map((item) => {
          return <Skeleton key={item} />;
        })}
      </div>
    );
  };
  return (
    <div>
      <div className="flex mt-4 justify-center">
        <input
          type="text"
          placeholder="نام محصول"
          className="input input-bordered input-accent w-full max-w-xs"
          onChange={(e) => {
            onChangeFilter("search", e.target.value);
          }}
        />
      </div>
      <AsyncHOC
        loading={loading}
        LoadingComponenet={LoadingComponenet}
        data={data}
      >
        <div className="flex flex-wrap justify-between">
          {data?.data?.map((item, index) => {
            return <ProductComponenet key={index} {...item} />;
          })}
        </div>

        {/* <div className="flex justify-center my-4 mb-5">
      
        {Array.from(Array(4)).map((item,index)=>{
            return  <button className="join-item btn btn-square" type="radio" name="options" onChange={()=>{
                    onChangeFilter('page',index+1)
                }}>{index+1}</button>
  })}

        </div> */}
      </AsyncHOC>
      <div className="join flex justify-center my-2">
        {Array.from(Array(5)).map((item, index) => (
          <button
            className="join-item btn"
            onClick={() => {
              onChangeFilter("page", index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
