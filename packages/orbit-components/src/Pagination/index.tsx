"use client";

import * as React from "react";

import useMediaQuery from "../hooks/useMediaQuery";
import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import ChevronBackward from "../icons/ChevronBackward";
import ChevronForward from "../icons/ChevronForward";
import { MAXIMUM_PAGES, SIZES } from "./consts";
import Pages from "./components/Pages";
import CompactPages from "./components/CompactPages";
import ActiveButton from "./components/ActiveButton";
import type { Props } from "./types";

const handlePageChange = (onPageChange, pageCount) => nextPageIndex => {
  if (onPageChange && nextPageIndex <= pageCount && nextPageIndex >= 0) {
    onPageChange(nextPageIndex);
  }
};

const Pagination = ({
  pageCount,
  labelPrev,
  labelNext,
  labelProgress,
  selectedPage = 1,
  onPageChange,
  dataTest,
  hideLabels = true,
  size = SIZES.NORMAL,
}: Props) => {
  const pageChanged = handlePageChange(onPageChange, pageCount);
  const { isTablet } = useMediaQuery();

  return (
    <Stack spacing="XXSmall" align="center" grow={false} shrink dataTest={dataTest} basis="auto">
      {!isTablet ? (
        <>
          <ButtonLink
            onClick={() => pageChanged(selectedPage - 1)}
            iconLeft={<ChevronBackward />}
            type="secondary"
            title={labelPrev}
            size={size}
            disabled={selectedPage <= 1}
          />
          <ActiveButton transparent size={size}>
            {labelProgress}
          </ActiveButton>
          <ButtonLink
            onClick={() => pageChanged(selectedPage + 1)}
            iconLeft={<ChevronForward />}
            type="secondary"
            title={labelNext}
            size={size}
            disabled={pageCount <= selectedPage}
          />
        </>
      ) : (
        <>
          <ButtonLink
            onClick={() => pageChanged(selectedPage - 1)}
            iconLeft={<ChevronBackward />}
            type="secondary"
            title={hideLabels ? labelPrev : undefined}
            size={size}
            disabled={selectedPage <= 1}
          >
            {!hideLabels && labelPrev}
          </ButtonLink>
          <Stack inline grow={false} spacing="XXSmall" align="center">
            {pageCount <= MAXIMUM_PAGES ? (
              <Pages
                pageCount={pageCount}
                selectedPage={selectedPage}
                onPageChange={onPageChange}
                size={size}
              />
            ) : (
              <CompactPages
                pageCount={pageCount}
                selectedPage={selectedPage}
                onPageChange={onPageChange}
                size={size}
              />
            )}
          </Stack>
          <ButtonLink
            onClick={() => pageChanged(selectedPage + 1)}
            iconRight={!hideLabels && <ChevronForward />}
            iconLeft={hideLabels && <ChevronForward />}
            type="secondary"
            title={hideLabels ? labelNext : undefined}
            size={size}
            disabled={pageCount <= selectedPage}
          >
            {!hideLabels && labelNext}
          </ButtonLink>
        </>
      )}
    </Stack>
  );
};

export default Pagination;
