import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Avatar, Card } from "react-native-paper";

export const EventInfo = ({ event = {} }) => {
  const {
    id,
    owner = "Kelly",
    profile_id,
    profile_image = "https://res.cloudinary.com/dkolsfjkx/image/upload/v1679395009/default_profile_veem15.jpg",
    comments_count,
    interested_count,
    going_count,
    interested_id,
    going_id,
    title = "great event",
    description = "A  brilliant event",
    event_date = "12 August 2024",
    tags,
    image = "https://res.cloudinary.com/dkolsfjkx/image/upload/v1685551309/media/images/lion_king_kqqaoc.jpg",
    updated_at = "1 August 2024",
  } = event;

  return (
    <Card elevation={5} style={styles.card}>
      <Avatar.Image
        size={32}
        source={{
          uri: profile_image,
        }}
        style={styles.avatar}
      />
      <Text>{owner}</Text>
      <Text>{updated_at}</Text>

      <Card.Cover key={title} source={{ uri: image }} style={styles.cover} />
      <Card.Content>
        <Text>
          {title} - {event_date}
        </Text>
        <Text>
          {interested_count} {going_count} {comments_count}
        </Text>
        <Text>{tags}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 10, backgroundColor: "white" },
  avatar: { margin: 5 },
});
