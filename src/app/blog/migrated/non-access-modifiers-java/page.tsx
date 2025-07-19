import Link from "next/link";

export default function NonAccessModifiersJava() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="mb-6">
        <Link href="/blog/migrated" className="text-blue-600 hover:underline">
          ← Back to migrated posts
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <h1>🏗️ Non-Access Modifiers in Java</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <time>June 30, 2014</time> • Originally published on
            old blog
          </div>
        </header>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm">
            <strong>Note:</strong> This post was originally published in 2014.
            While the core concepts remain valid, some examples may use older
            Java syntax. The principles discussed are still fundamental to Java
            programming.
          </p>
        </div>

        <p>
          Non-access modifiers in Java are keywords that modify the behavior of
          classes, methods, and variables without controlling their access
          level. Understanding these modifiers is crucial for writing efficient
          and well-structured Java code.
        </p>

        <h2>1. Static Modifier</h2>
        <p>
          The <code>static</code> modifier indicates that a member belongs to
          the class itself rather than to instances of the class.
        </p>

        <h3>Static Variables</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`public class Counter {
    static int count = 0;  // Shared across all instances
    
    public Counter() {
        count++;
    }
    
    public static int getCount() {
        return count;
    }
}`}
        </pre>

        <h3>Static Methods</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`public class MathUtils {
    public static double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }
    
    public static int max(int a, int b) {
        return (a > b) ? a : b;
    }
}`}
        </pre>

        <h2>2. Final Modifier</h2>
        <p>
          The <code>final</code> modifier prevents further modification,
          inheritance, or overriding.
        </p>

        <h3>Final Variables</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`public class Constants {
    public static final double PI = 3.14159;
    public static final String APP_NAME = "MyApplication";
    
    public void processData() {
        final int maxRetries = 3;  // Local final variable
        // maxRetries = 5;  // This would cause compilation error
    }
}`}
        </pre>

        <h3>Final Methods</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`public class Parent {
    public final void displayInfo() {
        System.out.println("This method cannot be overridden");
    }
}

public class Child extends Parent {
    // This would cause compilation error:
    // public void displayInfo() { }
}`}
        </pre>

        <h3>Final Classes</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`public final class StringUtils {
    public static String reverse(String str) {
        return new StringBuilder(str).reverse().toString();
    }
}

// This would cause compilation error:
// public class ExtendedStringUtils extends StringUtils { }`}
        </pre>

        <h2>3. Abstract Modifier</h2>
        <p>
          The <code>abstract</code> modifier is used for classes and methods
          that are incomplete and must be implemented by subclasses.
        </p>

        <h3>Abstract Classes</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`public abstract class Shape {
    protected double area;
    
    public abstract double calculateArea();
    
    public void displayArea() {
        System.out.println("Area: " + calculateArea());
    }
}

public class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}`}
        </pre>

        <h3>Abstract Methods</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`public abstract class DatabaseConnection {
    protected String url;
    protected String username;
    protected String password;
    
    public abstract void connect();
    public abstract void disconnect();
    public abstract void executeQuery(String query);
}`}
        </pre>

        <h2>4. Synchronized Modifier</h2>
        <p>
          The <code>synchronized</code> modifier provides thread safety by
          ensuring that only one thread can execute a method or block at a time.
        </p>

        <h3>Synchronized Methods</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`public class BankAccount {
    private double balance;
    
    public synchronized void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: " + amount + ", New balance: " + balance);
    }
    
    public synchronized void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount + ", New balance: " + balance);
        } else {
            System.out.println("Insufficient funds");
        }
    }
}`}
        </pre>

        <h3>Synchronized Blocks</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`public class Cache {
    private Map<String, Object> cache = new HashMap<>();
    private final Object lock = new Object();
    
    public void put(String key, Object value) {
        synchronized (lock) {
            cache.put(key, value);
        }
    }
    
    public Object get(String key) {
        synchronized (lock) {
            return cache.get(key);
        }
    }
}`}
        </pre>

        <h2>5. Transient Modifier</h2>
        <p>
          The <code>transient</code> modifier indicates that a field should not
          be serialized when the object is written to a stream.
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`import java.io.Serializable;

public class User implements Serializable {
    private String username;
    private String password;
    private transient String sessionToken;  // Won't be serialized
    private transient long lastLoginTime;   // Won't be serialized
    
    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.sessionToken = generateSessionToken();
        this.lastLoginTime = System.currentTimeMillis();
    }
    
    private String generateSessionToken() {
        return "token_" + System.currentTimeMillis();
    }
}`}
        </pre>

        <h2>6. Volatile Modifier</h2>
        <p>
          The <code>volatile</code> modifier ensures that a variable's value is
          always read from and written to main memory, not from thread-local
          cache.
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`public class SharedCounter {
    private volatile int count = 0;
    
    public void increment() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}

public class Worker implements Runnable {
    private SharedCounter counter;
    private volatile boolean running = true;
    
    public void stop() {
        running = false;
    }
    
    @Override
    public void run() {
        while (running) {
            counter.increment();
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }
}`}
        </pre>

        <h2>Best Practices</h2>
        <ul>
          <li>
            <strong>Use final</strong> for constants and immutable objects
          </li>
          <li>
            <strong>Use static</strong> for utility methods and shared data
          </li>
          <li>
            <strong>Use abstract</strong> for defining contracts and common
            behavior
          </li>
          <li>
            <strong>Use synchronized</strong> carefully to avoid performance
            issues
          </li>
          <li>
            <strong>Use transient</strong> for fields that shouldn't be
            serialized
          </li>
          <li>
            <strong>Use volatile</strong> for simple thread-safe flags
          </li>
        </ul>

        <h2>Common Pitfalls</h2>
        <ul>
          <li>
            Overusing <code>synchronized</code> can lead to performance
            bottlenecks
          </li>
          <li>Forgetting to implement abstract methods in subclasses</li>
          <li>
            Using <code>volatile</code> for complex operations (use{" "}
            <code>synchronized</code> instead)
          </li>
          <li>
            Not understanding that <code>static</code> members are shared across
            all instances
          </li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mt-8">
          <h3>Key Takeaways</h3>
          <ul>
            <li>Non-access modifiers control behavior, not access</li>
            <li>Each modifier serves a specific purpose in Java programming</li>
            <li>
              Understanding these modifiers is essential for writing thread-safe
              and efficient code
            </li>
            <li>
              Choose the right modifier based on your specific requirements
            </li>
          </ul>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This post was originally published on my old technical blog
            old blog in 2014. The concepts remain fundamental to Java
            programming today.
          </p>
        </footer>
      </article>
    </div>
  );
}
