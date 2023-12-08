import { Box, Group } from "@mantine/core"
import { StyledButton } from "../Buttons/StyledButton"
import { TextInfo, TitleLabel } from "../TextBlocks/TextBlocks"
import { RoutesTypes } from "@/global/ROUTES"
import { useRouter } from "next/navigation"

export const PopupAlertIntro = ({close}:any) => {
    
    const router = useRouter();
    return (
        <>
        <Box maw={440}><TitleLabel >
        Уважаемый клиент, мы&nbsp;заботимся о&nbsp;здоровье наших пациентов, поэтому, производя запись к&nbsp;специалисту в&nbsp;МЕДЦЕНТР, Вы&nbsp;гарантируете, что у&nbsp;Вас и&nbsp;Вашего ребенка:
        </TitleLabel></Box>
        <p><TextInfo>- Температура тела в день обращения не более&nbsp;37&nbsp;С</TextInfo></p>

        <p><TextInfo>- За последние сутки температура тела не повышалась&nbsp;до&nbsp;38&nbsp;С</TextInfo></p>

        <p><TextInfo>- Кожные покровы чистые, отсутствует сыпь</TextInfo></p>


<Group justify="center" mt="xl">
        
            <StyledButton appearence={'main_second_outlined'} onClick={()=>{router.push(RoutesTypes.Home)}}>
              Назад
            </StyledButton>
          
       
       
            <StyledButton appearence={'main_second'} onClick={()=>{close()}}  data-autofocus>
              Дальше
            </StyledButton>
         
      </Group>
      </>
    )
}

