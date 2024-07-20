import React from "react";
import styled from "styled-components/native";
import { Avatar, Card, IconButton, MD3Colors } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import Svg, { Use, Image } from "react-native-svg";

// Styled components
const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardTitle = styled.View`
  margin: ${(props) => props.theme.space[3]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OwnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AvatarImage = styled(Avatar.Image)`
  margin-right: ${(props) => props.theme.space[3]};
`;

const CardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  height: 500px;
  border-radius: 0;
`;

const CardContent = styled(Card.Content)`
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  align-items: center;
`;

const EventInfo = styled.View`
  flex-direction: row;
`;

const EventIcons = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

const Counts = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const OwnerText = styled.Text`
  margin-right: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

const EventTitleText = styled.Text`
  margin-right: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.eventTitle};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const EventDescription = styled.Text`
  margin-right: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.eventTitle};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RatingRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.space[1]};
`;

const IconWithText = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EventCard = ({ event = {} }) => {
  const {
    owner = "Kelly",
    profile_image = "https://res.cloudinary.com/dkolsfjkx/image/upload/v1679395009/default_profile_veem15.jpg",
    title = "Great Event",
    description = "Brilliant musical event for all the family. Just wait and see",
    event_date = "12 August 2024",
    tags = "musical, family",
    image = "https://res.cloudinary.com/dkolsfjkx/image/upload/v1685551309/media/images/lion_king_kqqaoc.jpg",
    updated_at = "1 August 2024",
    rating = 3.2,
    likes_count = 5,
    comments_count = 2,
  } = event;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  console.log(ratingArray);

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
          <OwnerText>{owner}</OwnerText>
        </OwnerContainer>
        <OwnerText>{updated_at}</OwnerText>
      </CardTitle>

      <CardCover key={title} source={{ uri: image }} />
      <CardContent>
        <Counts>
          <IconWithText>
            <Text>{likes_count}</Text>
            <IconButton
              icon="heart-outline"
              iconColor={MD3Colors.success50}
              size={25}
              onPress={() => console.log("Pressed")}
            />
          </IconWithText>
          <IconButton
            icon="calendar-blank"
            iconColor={MD3Colors.success50}
            size={25}
            onPress={() => console.log("Pressed")}
          />
          <IconWithText>
            <Text>{comments_count}</Text>
            <IconButton
              icon="comment-outline"
              iconColor={MD3Colors.success50}
              size={25}
              onPress={() => console.log("Pressed")}
            />
          </IconWithText>
        </Counts>

        <EventInfo>
          <EventTitleText>
            {title} - {event_date}
          </EventTitleText>
        </EventInfo>
        <View>
          <EventDescription>{description}</EventDescription>
        </View>
        <View>
          <Text># {tags}</Text>
        </View>
        <EventInfo>
          <RatingRow>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </RatingRow>
        </EventInfo>
      </CardContent>
    </StyledCard>
  );
};

export default EventCard;
