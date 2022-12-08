INSERT INTO departments (name)
VALUES ('Engineer'),
    ('Office'),
    ('Sales'),
    ('Intern');

INSERT INTO roles (title, salary, department_id)
VALUES ('Computer Engineer', 90000, 1),
    ('Office Administrator', 60000, 2),
    ('Salesperson', 75000, 3),
    ('Intern', 40000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 4),
    ('Office Administrator', 2, NULL),
    ('Salesperson', 2, 4),
    ('Intern', 4, NULL);
