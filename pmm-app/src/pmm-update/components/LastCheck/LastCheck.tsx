import React from 'react';
import { Button, Spinner } from '@grafana/ui';

import { LastCheckProps } from 'pmm-update/types';
import * as styles from './LastCheck.styles';

export const LastCheck = ({ lastCheckDate, onCheckForUpdates, isLoading = false }: LastCheckProps) => {
  const icon = 'fa fa-refresh';

  return (
    <div className={styles.lastCheck}>
      <p>Last check: {lastCheckDate}</p>
      {isLoading ? (
        <Spinner iconClassName={icon} />
      ) : (
        <Button variant="link" size="sm" onClick={onCheckForUpdates} icon={icon}></Button>
      )}
    </div>
  );
};
