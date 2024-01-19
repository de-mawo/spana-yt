"use client";

import DialogWrapper from "@/components/Common/DialogWrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PiCaretUpDownBold } from "react-icons/pi";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { BsCheckLg } from "react-icons/bs";
import { leaveStatus } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";

type EditLeaveProps = {
  id: string;
  days: number;
  type: string;
  year: string;
  email: string;
  user: string;
  startDate: Date;
};

const EditLeave = ({
  id,
  days,
  type,
  year,
  email,
  user,
  startDate,
}: EditLeaveProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const formSchema = z.object({
    notes: z.string().max(500),

    status: z.enum(leaveStatus),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notes: "",
    },
  });

  async function editLeave(values: z.infer<typeof formSchema>) {
    try {
      const formValues = {
        ...values,
        notes: values.notes,
        status: values.status,
        id,
        days,
        type,
        year,
        email,
        user,
        startDate,
      };

      const res = await fetch("/api/leave/leaveId", {
        method: "PATCH",
        body: JSON.stringify(formValues),
      });

      if (res.ok) {
        toast.success("Edit Successful", { duration: 4000 });
        setOpen(false);
        router.refresh();
      } else {
        const errorMessage = await res.text();

        toast.error(`An error occured ${errorMessage}`, { duration: 6000 });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An Unexpected error occured");
    }
  }

  return (
    <DialogWrapper
      btnTitle="Edit"
      title="Edit Leave"
      isBtn={true}
      open={open}
      setOpen={() => setOpen(!open)}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(editLeave)} className="space-y-8">
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Make a Decision</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          " justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? leaveStatus.find((status) => status === field.value)
                          : "Select a decision"}
                        <PiCaretUpDownBold className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search a status..." />
                      <CommandEmpty>No leave type found.</CommandEmpty>
                      <CommandGroup>
                        {leaveStatus.map((status, i) => (
                          <CommandItem
                            value={status}
                            key={i}
                            onSelect={() => {
                              form.setValue("status", status);
                            }}
                          >
                            <BsCheckLg
                              className={cn(
                                "mr-2 h-4 w-4",
                                status === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {status}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea placeholder="Notes" {...field} />
                </FormControl>
                <FormDescription>
                  Add extra notes to support your decision.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </DialogWrapper>
  );
};

export default EditLeave;
