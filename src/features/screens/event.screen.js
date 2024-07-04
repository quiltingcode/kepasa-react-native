import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "react-native";
import { EventCard } from "../events/components/event-card";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const EventListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: powderblue;
`;

export const EventsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <EventListContainer>
      <EventCard />
    </EventListContainer>
  </SafeArea>
);
