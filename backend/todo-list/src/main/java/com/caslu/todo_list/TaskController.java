package com.caslu.todo_list;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
    
    private List<Task> tasks = new ArrayList<>();
    private Long nextId = 1L;

    @GetMapping
    public List<Task> getTasks() {
        return tasks;
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        task.setId(nextId++);
        task.setCompleted(false);
        tasks.add(task);
        return task;
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task taskUpdate) {
        for (Task task : tasks) {
            if (task.getId().equals(id)) {
                task.setCompleted(taskUpdate.getCompleted());
                return task;
            }
        }
        return null;
    }

    @PatchMapping("/{id}")
    public Task patchTask(@PathVariable Long id, @RequestBody Task taskUpdate) {
        for (Task task : tasks) {
            if (task.getId().equals(id)) {
                if (taskUpdate.getTitle() != null) task.setTitle(taskUpdate.getTitle());
                if (taskUpdate.getCompleted() != null) task.setCompleted(taskUpdate.getCompleted());
                return task;
            }
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        tasks.removeIf(task -> task.getId().equals(id));
    }
}
