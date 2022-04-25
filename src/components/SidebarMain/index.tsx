import { Link } from "react-router-dom";
import { Container, Description, Icon, Info, Point, Title } from "./styles";
import {ReactComponent as ProfileIcon} from '../../components/svgs/profile.svg'
import {ReactComponent as MailIcon} from '../../components/svgs/mail.svg'
import {ReactComponent as BookIcon} from '../../components/svgs/book.svg'

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string; 
  active: boolean;
  nextStepActive: boolean;
}

export default function SidebarMain({title, description, icon, path, active, nextStepActive} : Props) {
  return(
    <>
      <Container nextStepActive={nextStepActive}>
        <Link to={path} >
          <Info>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Info>
          <Icon active={active}>
            {icon === 'profile' && 
              <ProfileIcon fill="white" width={24} height={24} />
            }
            {icon === 'book' && 
              <BookIcon fill="white" width={24} height={24} />
            }
            {icon === 'mail' && 
              <MailIcon fill="white" width={24} height={24} />
            }
          </Icon>
          <Point active={active}></Point>
        </Link>
      </Container>
    </>
  )
}