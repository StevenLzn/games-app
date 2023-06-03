import StyledComponentsRegistry from "@/lib/styled-components/registry";
import { GameMenu } from "../../organisms/GameMenu/GameMenu";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const GameLayout = ({ children, title }: LayoutProps) => {
  return (
    <StyledComponentsRegistry>
      <div>
        <GameMenu title={title} />
        <main>{children}</main>
      </div>
    </StyledComponentsRegistry>
  );
};

export default GameLayout;
