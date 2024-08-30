import axios from "axios";
import { useEffect, useState } from "react";
import { DataRangeType, ResultType } from "../types";

function useFetchImage(
  searchTerm: string,
  resultsType: ResultType,
  dataRange: DataRangeType | undefined
) {
  const [data, setData] = useState<ImageData[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only fetch data if searchTerm is provided
    if (!searchTerm) {
      setData([]);
      return;
    }

    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios.get("/api/route/images", {
          params: {
            q: searchTerm,
            num: resultsType,
            tbs: dataRange,
          },
        });
        setData(response.data.images);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, resultsType, dataRange]); // Dependency array includes searchTerm, resultsType, dataRange

  return { data, error, loading };
}

export default useFetchImage;
