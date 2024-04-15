'use client';

import { createContext, useState } from "react";

// Context is set with the 'value' attribute for <SearchQueryContext.Provider value={}></SearchQueryContext.Provider>
export const SearchQueryContext = createContext(null)