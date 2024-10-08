import { checkUser } from "@/actions/auth";

export default function Status() {
  checkUser();
  return null;
}
