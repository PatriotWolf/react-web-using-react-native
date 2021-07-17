import React, { useEffect } from "react";
import { Platform, StatusBar, StatusBarStyle } from "react-native";
import styled, { DefaultTheme, useTheme } from "styled-components/native";

interface LayoutProps {
  theme?: DefaultTheme;
}

const StyledLayout = styled.View`
  flex: 1;
  justifycontent: "center";
  alignitems: "center";
  paddingtop: 25;
  background: ${(props: LayoutProps) => props.theme?.colors.background};
`;

const StyledLayoutIOS = styled.SafeAreaView`
  flex: 1;
  justifycontent: "center";
  alignitems: "center";
  background: ${(props: LayoutProps) => props.theme?.colors.background};
`;

export const Layout: React.FC = ({ children }) => {
  const theme = useTheme();
  console.log(Platform.OS);
  const isAndroid = Platform.OS !== "ios";

  useEffect(() => {
    const statusBarStyle = theme.colors.statusBar as StatusBarStyle;
    StatusBar.setBarStyle(statusBarStyle);
  }, [theme]);

  if (isAndroid) {
    return (
      <StyledLayout>
        <StatusBar />
        {children}
      </StyledLayout>
    );
  }

  return (
    <StyledLayoutIOS>
      <StatusBar />
      {children}
    </StyledLayoutIOS>
  );
};
