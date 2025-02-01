import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList, SafeAreaView } from "react-native";
import { EventCard } from "../events/components/event-card";
import { Spacer } from "../events/components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const EventList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;


export const EventsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <EventList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }, { name: 7 }, { name: 8 }]}
      renderItem={() => (
        <Spacer position="bottom" size="small">
          <EventCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}

    />


  </SafeArea>
);
