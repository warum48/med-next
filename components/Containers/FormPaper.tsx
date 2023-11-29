import { Paper } from "@mantine/core";
import { TChildren } from "./InnerPageContainer";

export const FormPaper = ({ children }: TChildren) => {
    return(
        <Paper withBorder shadow="md" p={{base: 'md', md: 'xl'}} mt={{base: 'md', md: 'md'}} radius="md">{children}</Paper>
    )
}