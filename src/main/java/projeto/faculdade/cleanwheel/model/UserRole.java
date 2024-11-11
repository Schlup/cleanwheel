package projeto.faculdade.cleanwheel.model;

public enum UserRole {
    OWNER("owner"),
    USER("user"),
    EMPLOYEE("employee");

    private String role;

    UserRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}