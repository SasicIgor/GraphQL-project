import { useState, type FormEvent } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";

type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const { toast } = useToast();
  const [text, setText] = useState(userName);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      toast({ description: "Please enter a valid username" });
      return;
    }
    setUserName(text);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
    >
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        type="text"
        id="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Github Users"
        className="flex-grow bg-background"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
