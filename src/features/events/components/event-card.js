import React from "react";
import styled from "styled-components/native";
import { Avatar, Card, IconButton, MD3Colors } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../components/spacer/spacer.component";
import { Text } from "../components/typography/text.component";
import star from "../../../../assets/star";
import Svg, { Use, Image } from "react-native-svg";
import {  StyledCard } from "./event-card.styles";
import {  CardTitle } from "./event-card.styles";
import {  OwnerContainer } from "./event-card.styles";
import {  AvatarImage } from "./event-card.styles";
import {  CardCover } from "./event-card.styles";
import {  CardContent } from "./event-card.styles";
import {  EventInfo } from "./event-card.styles";
import {  EventIcons } from "./event-card.styles";
import {  Counts } from "./event-card.styles";
import {  RatingRow } from "./event-card.styles";
import {  IconWithText } from "./event-card.styles";

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
          <Text variant="body">{owner}</Text>
        </OwnerContainer>
        <Text variant="body">{updated_at}</Text>
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
          <Text variant="label">
            {title} - {event_date}
          </Text>
        </EventInfo>
        <View>
          <Spacer position="top" size="medium">
          <Text variant="body">{description}</Text>
          </Spacer>
          
        </View>
        <View>
          <Text># {tags}</Text>
        </View>
        <EventInfo>
          <Spacer position="bottom" size="small">
          <RatingRow>
            {ratingArray.map((index) => (
              <SvgXml xml={star} width={20} height={20} key={index} />
            ))}
          </RatingRow>
          </Spacer>
         
        </EventInfo>
      </CardContent>
    </StyledCard>
  );
};

export default EventCard;
