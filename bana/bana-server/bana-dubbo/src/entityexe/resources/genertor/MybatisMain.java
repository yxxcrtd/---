package genertor;

import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.mybatis.generator.api.MyBatisGenerator;
import org.mybatis.generator.config.Configuration;
import org.mybatis.generator.config.xml.ConfigurationParser;
import org.mybatis.generator.exception.InvalidConfigurationException;
import org.mybatis.generator.exception.XMLParserException;
import org.mybatis.generator.internal.DefaultShellCallback;

public class MybatisMain {

	public static void mybatisCreate() {

		List<String> warnings = new ArrayList<String>();
		boolean overwrite = true;
		String projectBasePath = new File("").getAbsolutePath();
		File fileConfigFile = new File(projectBasePath
				+ "/src/entityexe/resources/config/generatorConfig.xml");
		ConfigurationParser cp = new ConfigurationParser(warnings);
		try {
			Configuration config = cp.parseConfiguration(fileConfigFile);
			DefaultShellCallback callback = new DefaultShellCallback(overwrite);
			try {
				
				try {
					MyBatisGenerator myBatisGenerator = new MyBatisGenerator(
							config, callback, warnings);
					myBatisGenerator.generate(null);
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			} catch (InvalidConfigurationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (XMLParserException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		mybatisCreate();
	}

}
