import React, { useState } from "react";

export const useHandlers = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  return { isError, isLoading };
};
