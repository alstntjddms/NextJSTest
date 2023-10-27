"use client";
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { checkJwtTokenCookie } from "../../framework/Login.js";

import { Listbox, ListboxItem } from "@nextui-org/react";
import { IconWrapper } from "../../components/IconWrapper";
import { ItemCounter } from "../../components/ItemCounter";
import { BugIcon } from "../../components/BugIcon";
import { PullRequestIcon } from "../../components/PullRequestIcon";
import { ChatIcon } from "../../components/ChatIcon";
import { PlayCircleIcon } from "../../components/PlayCircleIcon";
import { LayoutIcon } from "../../components/LayoutIcon";
import { TagIcon } from "../../components/TagIcon";
import { UsersIcon } from "../../components/UsersIcon";
import { WatchersIcon } from "../../components/WatchersIcon";
import { BookIcon } from "../../components/BookIcon";

export default function () {
  // 토큰체크
  useEffect(() => {
    checkJwtTokenCookie();
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "closeLoading" });
  });

  return (
    <div className="test3 max-h-screen" style={{ paddingBottom: "150px" }}>
      <Listbox
        style={{ margin: "3%", width: "94%" }}
        aria-label="User Menu"
        onAction={(key) => alert(key)}
        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-full overflow-visible shadow-small rounded-medium"
        itemClasses={{
          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
        }}
      >
        <ListboxItem
          key="issues"
          endContent={<ItemCounter number={13} />}
          startContent={
            <IconWrapper className="bg-success/10 text-success">
              <BugIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Issues
        </ListboxItem>
        <ListboxItem
          key="pull_requests"
          endContent={<ItemCounter number={6} />}
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <PullRequestIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Pull Requests
        </ListboxItem>
        <ListboxItem
          key="discussions"
          endContent={<ItemCounter number={293} />}
          startContent={
            <IconWrapper className="bg-secondary/10 text-secondary">
              <ChatIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Discussions
        </ListboxItem>
        <ListboxItem
          key="actions"
          endContent={<ItemCounter number={2} />}
          startContent={
            <IconWrapper className="bg-warning/10 text-warning">
              <PlayCircleIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Actions
        </ListboxItem>
        <ListboxItem
          key="projects"
          endContent={<ItemCounter number={4} />}
          startContent={
            <IconWrapper className="bg-default/50 text-foreground">
              <LayoutIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Projects
        </ListboxItem>
        <ListboxItem
          key="releases"
          className="group h-auto py-3"
          endContent={<ItemCounter number={399} />}
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <TagIcon className="text-lg" />
            </IconWrapper>
          }
          textValue="Releases"
        >
          <div className="flex flex-col gap-1">
            <span>Releases</span>
            <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
              <span className="text-tiny text-default-600">
                @nextui-org/react@2.0.10
              </span>
              <div className="flex gap-2 text-tiny">
                <span className="text-default-500">49 minutes ago</span>
                <span className="text-success">Latest</span>
              </div>
            </div>
          </div>
        </ListboxItem>
        <ListboxItem
          key="contributors"
          endContent={<ItemCounter number={79} />}
          startContent={
            <IconWrapper className="bg-warning/10 text-warning">
              <UsersIcon />
            </IconWrapper>
          }
        >
          Contributors
        </ListboxItem>
        <ListboxItem
          key="watchers"
          endContent={<ItemCounter number={82} />}
          startContent={
            <IconWrapper className="bg-default/50 text-foreground">
              <WatchersIcon />
            </IconWrapper>
          }
        >
          Watchers
        </ListboxItem>
        <ListboxItem
          key="license"
          endContent={<span className="text-small text-default-400">MIT</span>}
          startContent={
            <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
              <BookIcon />
            </IconWrapper>
          }
        >
          License
        </ListboxItem>
      </Listbox>

      <Listbox
        style={{ margin: "3%", width: "94%" }}
        aria-label="User Menu"
        onAction={(key) => alert(key)}
        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-full overflow-visible shadow-small rounded-medium"
        itemClasses={{
          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
        }}
      >
        <ListboxItem
          key="issues"
          endContent={<ItemCounter number={13} />}
          startContent={
            <IconWrapper className="bg-success/10 text-success">
              <BugIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Issues
        </ListboxItem>
        <ListboxItem
          key="pull_requests"
          endContent={<ItemCounter number={6} />}
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <PullRequestIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Pull Requests
        </ListboxItem>
        <ListboxItem
          key="discussions"
          endContent={<ItemCounter number={293} />}
          startContent={
            <IconWrapper className="bg-secondary/10 text-secondary">
              <ChatIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Discussions
        </ListboxItem>
        <ListboxItem
          key="actions"
          endContent={<ItemCounter number={2} />}
          startContent={
            <IconWrapper className="bg-warning/10 text-warning">
              <PlayCircleIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Actions
        </ListboxItem>
        <ListboxItem
          key="projects"
          endContent={<ItemCounter number={4} />}
          startContent={
            <IconWrapper className="bg-default/50 text-foreground">
              <LayoutIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Projects
        </ListboxItem>
        <ListboxItem
          key="releases"
          className="group h-auto py-3"
          endContent={<ItemCounter number={399} />}
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <TagIcon className="text-lg" />
            </IconWrapper>
          }
          textValue="Releases"
        >
          <div className="flex flex-col gap-1">
            <span>Releases</span>
            <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
              <span className="text-tiny text-default-600">
                @nextui-org/react@2.0.10
              </span>
              <div className="flex gap-2 text-tiny">
                <span className="text-default-500">49 minutes ago</span>
                <span className="text-success">Latest</span>
              </div>
            </div>
          </div>
        </ListboxItem>
        <ListboxItem
          key="contributors"
          endContent={<ItemCounter number={79} />}
          startContent={
            <IconWrapper className="bg-warning/10 text-warning">
              <UsersIcon />
            </IconWrapper>
          }
        >
          Contributors
        </ListboxItem>
        <ListboxItem
          key="watchers"
          endContent={<ItemCounter number={82} />}
          startContent={
            <IconWrapper className="bg-default/50 text-foreground">
              <WatchersIcon />
            </IconWrapper>
          }
        >
          Watchers
        </ListboxItem>
        <ListboxItem
          key="license"
          endContent={<span className="text-small text-default-400">MIT</span>}
          startContent={
            <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
              <BookIcon />
            </IconWrapper>
          }
        >
          License
        </ListboxItem>
      </Listbox>

      <Listbox
        style={{ margin: "3%", width: "94%" }}
        aria-label="User Menu"
        onAction={(key) => alert(key)}
        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-full overflow-visible shadow-small rounded-medium"
        itemClasses={{
          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
        }}
      >
        <ListboxItem
          key="issues"
          endContent={<ItemCounter number={13} />}
          startContent={
            <IconWrapper className="bg-success/10 text-success">
              <BugIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Issues
        </ListboxItem>
        <ListboxItem
          key="pull_requests"
          endContent={<ItemCounter number={6} />}
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <PullRequestIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Pull Requests
        </ListboxItem>
        <ListboxItem
          key="discussions"
          endContent={<ItemCounter number={293} />}
          startContent={
            <IconWrapper className="bg-secondary/10 text-secondary">
              <ChatIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Discussions
        </ListboxItem>
        <ListboxItem
          key="actions"
          endContent={<ItemCounter number={2} />}
          startContent={
            <IconWrapper className="bg-warning/10 text-warning">
              <PlayCircleIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Actions
        </ListboxItem>
        <ListboxItem
          key="projects"
          endContent={<ItemCounter number={4} />}
          startContent={
            <IconWrapper className="bg-default/50 text-foreground">
              <LayoutIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Projects
        </ListboxItem>
        <ListboxItem
          key="releases"
          className="group h-auto py-3"
          endContent={<ItemCounter number={399} />}
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <TagIcon className="text-lg" />
            </IconWrapper>
          }
          textValue="Releases"
        >
          <div className="flex flex-col gap-1">
            <span>Releases</span>
            <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
              <span className="text-tiny text-default-600">
                @nextui-org/react@2.0.10
              </span>
              <div className="flex gap-2 text-tiny">
                <span className="text-default-500">49 minutes ago</span>
                <span className="text-success">Latest</span>
              </div>
            </div>
          </div>
        </ListboxItem>
        <ListboxItem
          key="contributors"
          endContent={<ItemCounter number={79} />}
          startContent={
            <IconWrapper className="bg-warning/10 text-warning">
              <UsersIcon />
            </IconWrapper>
          }
        >
          Contributors
        </ListboxItem>
        <ListboxItem
          key="watchers"
          endContent={<ItemCounter number={82} />}
          startContent={
            <IconWrapper className="bg-default/50 text-foreground">
              <WatchersIcon />
            </IconWrapper>
          }
        >
          Watchers
        </ListboxItem>
        <ListboxItem
          key="license"
          endContent={<span className="text-small text-default-400">MIT</span>}
          startContent={
            <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
              <BookIcon />
            </IconWrapper>
          }
        >
          License
        </ListboxItem>
      </Listbox>

      <Listbox
        style={{ margin: "3%", width: "94%" }}
        aria-label="User Menu"
        onAction={(key) => alert(key)}
        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-full overflow-visible shadow-small rounded-medium"
        itemClasses={{
          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
        }}
      >
        <ListboxItem
          key="issues"
          endContent={<ItemCounter number={13} />}
          startContent={
            <IconWrapper className="bg-success/10 text-success">
              <BugIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Issues
        </ListboxItem>
        <ListboxItem
          key="pull_requests"
          endContent={<ItemCounter number={6} />}
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <PullRequestIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Pull Requests
        </ListboxItem>
        <ListboxItem
          key="discussions"
          endContent={<ItemCounter number={293} />}
          startContent={
            <IconWrapper className="bg-secondary/10 text-secondary">
              <ChatIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Discussions
        </ListboxItem>
        <ListboxItem
          key="actions"
          endContent={<ItemCounter number={2} />}
          startContent={
            <IconWrapper className="bg-warning/10 text-warning">
              <PlayCircleIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Actions
        </ListboxItem>
        <ListboxItem
          key="projects"
          endContent={<ItemCounter number={4} />}
          startContent={
            <IconWrapper className="bg-default/50 text-foreground">
              <LayoutIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Projects
        </ListboxItem>
        <ListboxItem
          key="releases"
          className="group h-auto py-3"
          endContent={<ItemCounter number={399} />}
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <TagIcon className="text-lg" />
            </IconWrapper>
          }
          textValue="Releases"
        >
          <div className="flex flex-col gap-1">
            <span>Releases</span>
            <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
              <span className="text-tiny text-default-600">
                @nextui-org/react@2.0.10
              </span>
              <div className="flex gap-2 text-tiny">
                <span className="text-default-500">49 minutes ago</span>
                <span className="text-success">Latest</span>
              </div>
            </div>
          </div>
        </ListboxItem>
        <ListboxItem
          key="contributors"
          endContent={<ItemCounter number={79} />}
          startContent={
            <IconWrapper className="bg-warning/10 text-warning">
              <UsersIcon />
            </IconWrapper>
          }
        >
          Contributors
        </ListboxItem>
        <ListboxItem
          key="watchers"
          endContent={<ItemCounter number={82} />}
          startContent={
            <IconWrapper className="bg-default/50 text-foreground">
              <WatchersIcon />
            </IconWrapper>
          }
        >
          Watchers
        </ListboxItem>
        <ListboxItem
          key="license"
          endContent={<span className="text-small text-default-400">MIT</span>}
          startContent={
            <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
              <BookIcon />
            </IconWrapper>
          }
        >
          License
        </ListboxItem>
      </Listbox>

      <Listbox
        style={{ margin: "3%", width: "94%" }}
        aria-label="User Menu"
        onAction={(key) => alert(key)}
        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-full overflow-visible shadow-small rounded-medium"
        itemClasses={{
          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
        }}
      >
        <ListboxItem
          key="issues"
          endContent={<ItemCounter number={13} />}
          startContent={
            <IconWrapper className="bg-success/10 text-success">
              <BugIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Issues
        </ListboxItem>
        <ListboxItem
          key="pull_requests"
          endContent={<ItemCounter number={6} />}
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <PullRequestIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Pull Requests
        </ListboxItem>
        <ListboxItem
          key="discussions"
          endContent={<ItemCounter number={293} />}
          startContent={
            <IconWrapper className="bg-secondary/10 text-secondary">
              <ChatIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Discussions
        </ListboxItem>
        <ListboxItem
          key="actions"
          endContent={<ItemCounter number={2} />}
          startContent={
            <IconWrapper className="bg-warning/10 text-warning">
              <PlayCircleIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Actions
        </ListboxItem>
        <ListboxItem
          key="projects"
          endContent={<ItemCounter number={4} />}
          startContent={
            <IconWrapper className="bg-default/50 text-foreground">
              <LayoutIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Projects
        </ListboxItem>
        <ListboxItem
          key="releases"
          className="group h-auto py-3"
          endContent={<ItemCounter number={399} />}
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <TagIcon className="text-lg" />
            </IconWrapper>
          }
          textValue="Releases"
        >
          <div className="flex flex-col gap-1">
            <span>Releases</span>
            <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
              <span className="text-tiny text-default-600">
                @nextui-org/react@2.0.10
              </span>
              <div className="flex gap-2 text-tiny">
                <span className="text-default-500">49 minutes ago</span>
                <span className="text-success">Latest</span>
              </div>
            </div>
          </div>
        </ListboxItem>
        <ListboxItem
          key="contributors"
          endContent={<ItemCounter number={79} />}
          startContent={
            <IconWrapper className="bg-warning/10 text-warning">
              <UsersIcon />
            </IconWrapper>
          }
        >
          Contributors
        </ListboxItem>
        <ListboxItem
          key="watchers"
          endContent={<ItemCounter number={82} />}
          startContent={
            <IconWrapper className="bg-default/50 text-foreground">
              <WatchersIcon />
            </IconWrapper>
          }
        >
          Watchers
        </ListboxItem>
        <ListboxItem
          key="license"
          endContent={<span className="text-small text-default-400">MIT</span>}
          startContent={
            <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
              <BookIcon />
            </IconWrapper>
          }
        >
          License
        </ListboxItem>
      </Listbox>
    </div>
  );
}
