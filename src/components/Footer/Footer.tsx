import classNames from 'classnames';
import { Status } from '../../types/Status';

type Props = {
  todosLength: number;
  onStatus: (status: Status) => void;
  status: Status;
  hasCompletedTodos: boolean;
  handleClear: () => void;
};

export const Footer: React.FC<Props> = ({
  todosLength,
  onStatus,
  status,
  hasCompletedTodos,
  handleClear,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${todosLength} items left`}
      </span>

      {/* Active filter should have a 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: status === Status.ALL,
          })}
          data-cy="FilterLinkAll"
          onClick={() => onStatus(Status.ALL)}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: status === Status.ACTIVE,
          })}
          data-cy="FilterLinkActive"
          onClick={() => onStatus(Status.ACTIVE)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: status === Status.COMPLETED,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => onStatus(Status.COMPLETED)}
        >
          Completed
        </a>
      </nav>

      {/* don't show this button if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={() => handleClear()}
        disabled={!hasCompletedTodos}
      >
        Clear completed
      </button>
    </footer>
  );
};