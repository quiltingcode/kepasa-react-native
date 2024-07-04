import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Avatar, Card, IconButton, MD3Colors } from "react-native-paper";

export const EventCard = ({ event = {} }) => {
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
    tags = "musical",
    image = "https://res.cloudinary.com/dkolsfjkx/image/upload/v1685551309/media/images/lion_king_kqqaoc.jpg",
    updated_at = "1 August 2024",
  } = event;

  return (
    <Card elevation={5} style={styles.card}>
      <View style={styles.cardTitle}>
        <View style={styles.leftContainer}>
          <Avatar.Image
            size={32}
            source={{
              uri: profile_image,
            }}
            style={styles.avatar}
          />
          <Text>{owner}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text>{updated_at}</Text>
        </View>
      </View>

      <Card.Cover key={title} source={{ uri: image }} style={styles.cover} />
      <Card.Content style={styles.cardContent}>
        <View style={styles.eventInfo}>
          <Text>
            {title} - {event_date}
          </Text>
        </View>
        <View>
          <Text>{tags}</Text>
        </View>
        <View style={styles.eventInfo}>
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
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 10, backgroundColor: "white" },
  avatar: { marginRight: 8 },
  cardTitle: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContent: {
    padding: 5,
    alignItems: "center",
  },
  leftContainer: { flexDirection: "row", alignItems: "center" },
  rightContainer: { marginRight: 8 },
  eventInfo: { flexDirection: "row", alignItems: "center" },
});
