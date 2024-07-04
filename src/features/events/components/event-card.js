import React from "react";
import styled from "styled-components/native";
import { Avatar, Card, IconButton, MD3Colors } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";

// Styled components
const StyledCard = styled(Card)`
  background-color: white;
`;

const CardTitle = styled.View`
  margin-left: 8px;
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OwnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AvatarImage = styled(Avatar.Image)`
  margin-right: 8px;
`;

const CardCover = styled(Card.Cover)`
  padding: 10px;
  background-color: white;
`;

const CardContent = styled(Card.Content)`
  padding: 5px;
  align-items: center;
`;

const EventInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UpdatedText = styled.Text`
  margin-right: 8px;
`;

export const EventCard = ({ event = {} }) => {
  const {
    owner = "Kelly",
    profile_image = "https://res.cloudinary.com/dkolsfjkx/image/upload/v1679395009/default_profile_veem15.jpg",
    title = "great event",
    event_date = "12 August 2024",
    tags = "musical",
    image = "https://res.cloudinary.com/dkolsfjkx/image/upload/v1685551309/media/images/lion_king_kqqaoc.jpg",
    updated_at = "1 August 2024",
  } = event;

  return (
    <StyledCard elevation={5}>
      <CardTitle>
        <OwnerContainer>
          <AvatarImage
            size={32}
            source={{
              uri: profile_image,
            }}
          />
          <Text>{owner}</Text>
        </OwnerContainer>
        <UpdatedText>{updated_at}</UpdatedText>
      </CardTitle>

      <CardCover key={title} source={{ uri: image }} />
      <CardContent>
        <EventInfo>
          <Text>
            {title} - {event_date}
          </Text>
        </EventInfo>
        <View>
          <Text>{tags}</Text>
        </View>
        <EventInfo>
          <IconButton
            icon="eye"
            iconColor={MD3Colors.success50}
            size={25}
            onPress={() => console.log("Pressed")}
          />
          <IconButton
            icon="calendar"
            iconColor={MD3Colors.success50}
            size={25}
            onPress={() => console.log("Pressed")}
          />
          <IconButton
            icon="comment"
            iconColor={MD3Colors.success50}
            size={25}
            onPress={() => console.log("Pressed")}
          />
        </EventInfo>
      </CardContent>
    </StyledCard>
  );
};

export default EventCard;
