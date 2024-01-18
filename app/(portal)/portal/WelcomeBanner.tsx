import Container from "@/components/Common/Container";
import { User } from "@prisma/client";
import DialogWrapper from "@/components/Common/DialogWrapper";
import RequestForm from "./RequestForm";

type Props = {
  user: User;
};

const WelcomeBanner = ({ user }: Props) => {
  return (
    <Container>
      <div className="flex flex-wrap justify-between items-center my-6 ">
        {/* LEFT SIDE */}
        <div className="flex justify-start items-center">
          <h2 className="text-xl font-extrabold leading-tight  lg:text-2xl">
            Welcome {user.name}!
          </h2>
        </div>

        {/* RIGHT SIDE  */}

        <div className="flex items-center space-x-3 md:space-x-6">
          <RequestForm user={user} />
        </div>
      </div>
    </Container>
  );
};

export default WelcomeBanner;
