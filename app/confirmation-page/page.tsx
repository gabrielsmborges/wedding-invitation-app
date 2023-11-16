"use client";
import { FormEvent, useEffect, useState } from "react";
import { useStore } from "../store";
import { useIsAuth } from "../util/hooks";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function ConfirmationPage() {
  const isAuth = useIsAuth();

  const router = useRouter();
  const searchParams = useSearchParams();

  const isModification = searchParams.get("modify") === "true";

  const users = useStore((state) => state.users);
  const [selectedUsers, setSelectedUsers] = useState<typeof users>([]);
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const groupCode = useStore((state) => state.groupCode);

  const confirmedData = useQuery({
    queryKey: ["confirmation-one", groupCode],
    queryFn: () => {
      return axios.get(`/api/confirmation-one/${groupCode}`);
    },
  });

  const confirmGoing = useMutation({
    mutationFn: () => {
      const selectedUsersIds = selectedUsers.map(
        (selectedUser) => selectedUser.id
      );
      return axios.post(`/api/confirmation-one/${groupCode}`, {
        guestsGoingIds: selectedUsersIds,
        guestsGoingNames: selectedUsers.map((user) => user.name),
        email,
        phone,
      });
    },
    onSuccess: () => {
      router.push("/thank-you");
    },
  });

  useEffect(() => {
    if (!confirmedData.data?.data) {
      return;
    }

    const overallStatus = confirmedData.data.data.overallStatus;

    if (overallStatus === "Done" && !isModification) {
      router.push("/already-responded");
    }
  }, [confirmedData.data]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    confirmGoing.mutate();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {confirmedData.isLoading || confirmGoing.isPending ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <h1>Confirm who can attend the event</h1>
          <i
            // small print
            className="text-sm"
          >
            You have until 12:00pm on 1st January 2024 to confirm who can attend
            the event.
          </i>
          <ul>
            {users.map((user) => {
              return (
                <li key={user.id}>
                  <input
                    type="checkbox"
                    id={user.id}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedUsers([...selectedUsers, user]);
                      } else {
                        setSelectedUsers(
                          selectedUsers.filter((selectedUser) => {
                            return selectedUser.id !== user.id;
                          })
                        );
                      }
                    }}
                  />
                  <label htmlFor={user.id}>{user.name}</label>
                </li>
              );
            })}
          </ul>
          <p>Please add contact details for the event organiser</p>
          {/* email and phone */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <p>
            We will send you a confirmation email as well as 2 reminder email in
            3 months and 1 month before the event.
          </p>
          <button className="border-2 border-black" type="submit">
            {selectedUsers.length > 0 ? "Confirm" : "No one is participating"}
          </button>
        </form>
      )}
    </main>
  );
}
