"use client";

import { getUsers, Users } from "@/apis/getUsers";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "./ui/button";

import LoadingBtn from "./ui/loadingBtn";

type Props = {};

export default function UsersTable({}: Props) {
  const [users, setUsers] = useState<[] | Users[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    setLoading(true);
    console.log("skip ", skip);

    const data = await getUsers(skip);
    setUsers(data);
    setLoading(false);
  };

  const handleClick = (val: number) => {
    setSkip((prev) => prev + val);
    getAllUsers();
  };
  return (
    <>
      {loading ? (
        <LoadingBtn />
      ) : (
        <Table>
          <TableCaption>A list of your Users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Username</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="text-right">Age</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow key={user?.firstName}>
                  <TableCell className="font-medium">
                    {user?.firstName}
                  </TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell className="text-right">{user.age}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
      {!loading && (
        <div className="flex w-full  justify-end gap-2 items-center">
          <Button
            variant={"outline"}
            disabled={skip <= 0}
            onClick={() => handleClick(-10)}
          >
            Prev
          </Button>
          <Button
            variant={"outline"}
            disabled={skip >= 200}
            onClick={() => handleClick(10)}
          >
            Next
          </Button>
        </div>
      )}
    </>
  );
}
