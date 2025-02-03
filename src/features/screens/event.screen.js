import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { EventCard } from "../../components/event-card";
import { Spacer } from "../../components/spacer/spacer.component";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SafeArea } from "../../components/utils/safe-area.component";
import { useAuth } from "../../contexts/CurrentUserContext";

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
