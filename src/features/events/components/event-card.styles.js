import styled from "styled-components/native";
import { Avatar, Card, IconButton, MD3Colors } from "react-native-paper";

// Styled components
export const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardTitle = styled.View`
  margin: ${(props) => props.theme.space[3]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OwnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AvatarImage = styled(Avatar.Image)`
  margin-right: ${(props) => props.theme.space[3]};
`;

export const CardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  height: 500px;
  border-radius: 0;
`;

export const CardContent = styled(Card.Content)`
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  align-items: center;
`;

export const EventInfo = styled.View`
  flex-direction: row;
`;

export const EventIcons = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Counts = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const RatingRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.space[1]};
`;

export const IconWithText = styled.View`
  flex-direction: row;
  align-items: center;
`;