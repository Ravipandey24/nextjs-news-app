"use client";

import { Card } from "@chakra-ui/react";
import { useState } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { getOneMonthAgo } from "@/lib/uitls";
import { useDataContext } from "../providers/DataContext";

const HeadingCard = ({}) => {
  const { state, dispatch } = useDataContext()!;
  const heading = state.query ? `Articles related to '${state.query}'` : 'Top News Articles from US' 

  return (
    <Card className="mb-4">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="font-normal text-xl">{heading}</h1>
        <div className="flex items-center gap-2">
          <span className="text-base">Showing From: </span>
          <div className="w-32">
            <SingleDatepicker
              name="date-input"
              date={state.date}
              onDateChange={(date) => { dispatch({type:'CHANGE_DATE', value: date}) }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeadingCard;
