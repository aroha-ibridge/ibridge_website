import { Link } from 'react-router-dom';

function SqlQueriesOnPandasDataframeBlogSection() {
  return (
    <>
      <div data-elementor-type="single-post" data-elementor-id="16187" className="elementor elementor-16187 elementor-location-single post-17829 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized" data-elementor-post-type="elementor_library">
      					<section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-4fa706e7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4fa706e7" data-element_type="section" data-settings={'{"background_background":"classic"}'}>
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-57c958ba" data-id="57c958ba" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-620c9295 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="620c9295" data-element_type="widget" data-widget_type="theme-post-title.default">
      				<div className="elementor-widget-container">
      			<h1 className="elementor-heading-title elementor-size-default">SQL Queries On Pandas DataFrame</h1>		</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				<section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-46ceb2d4 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="46ceb2d4" data-element_type="section">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6f2e913b" data-id="6f2e913b" data-element_type="column" data-settings={'{"background_background":"classic"}'}>
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-2a33e440 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image" data-id="2a33e440" data-element_type="widget" data-widget_type="theme-post-featured-image.default">
      				<div className="elementor-widget-container">
      													<img width="681" height="218" src="/wp-content/uploads/2024/07/Screenshot-2024-07-17-130821.png" className="attachment-full size-full wp-image-17830" alt="SQL Queries On Pandas DataFrame" srcSet="/wp-content/uploads/2024/07/Screenshot-2024-07-17-130821.png 681w, /wp-content/uploads/2024/07/Screenshot-2024-07-17-130821-300x96.png 300w" sizes="(max-width: 681px) 100vw, 681px" />													</div>
      				</div>
      				<div className="elementor-element elementor-element-4ec20837 elementor-widget elementor-widget-theme-post-content" data-id="4ec20837" data-element_type="widget" data-widget_type="theme-post-content.default">
      				<div className="elementor-widget-container"><div dangerouslySetInnerHTML={{ __html: `<p>Writing SQL query for Pandas DataFrame?<br />
      Yes we can use Pandasql which support you to write SQL query for Pandas Data Frame. If you are very much comfortable with SQL queries than pandas code for filter the DataFrame we can use pandasql.sqldf to run sql type of queries on Dataframe.</p>
      <p><span style="color: #000000;"><strong>Install Pandasql</strong></span></p>
      <p>Pip install pandasql</p>
      <p><span style="color: #000000;"><strong> Syntax </strong></span></p>
      <p>psql.sqldf(query, locals())</p>
      <p><span style="color: #000000;"><strong>Run Basic Query on Pandas Dataframe</strong></span></p>
      <p>import pandas as pd<br />
      import pandasql as psql<br />
      # Create a sample DataFrame<br />
      data = {<br />
      &#8216;name&#8217;: [&#8216;Abhi&#8217;, &#8216;Bharath&#8217;, &#8216;Chandan&#8217;, &#8216;Dravid&#8217;, &#8216;Keerthi&#8217;],<br />
      &#8216;age&#8217;: [24, 27, 22, 32, 29],<br />
      &#8216;score&#8217;: [85, 88, 92, 95, 78]<br />
      }<br />
      df = pd.DataFrame(data)<br />
      # Define a SQL query<br />
      query = &#8220;SELECT * FROM df WHERE age &gt; 25&#8221;<br />
      # Execute the query<br />
      result = psql.sqldf(query, locals())<br />
      print(result)</p>
      <p><span style="color: #000000;"><strong>Joining DataFrames: </strong></span>You can perform SQL joins on multiple DataFrames:</p>
      <p>import pandas as pd<br />
      import pandasql as psql<br />
      # Create sample DataFrames<br />
      df1 = pd.DataFrame({&#8216;id&#8217;: [1, 2, 3],<br />
      &#8216;name&#8217;: [&#8216;Abhi&#8217;, &#8216;Bharath&#8217;, &#8216;Chandan&#8217;]})<br />
      df2 = pd.DataFrame({<br />
      &#8216;id&#8217;: [1, 2, 4],<br />
      &#8216;score&#8217;: [85, 88, 92]})<br />
      # SQL query to join DataFrames<br />
      query = &#8220;&#8221;&#8221;SELECT df1.id, df1.name, df2.score<br />
      FROM df1<br />
      LEFT JOIN df2 ON df1.id = df2.id&#8221;&#8221;&#8221;<br />
      # Execute the query<br />
      result = psql.sqldf(query, locals())<br />
      print(result)</p>
      <p><span style="color: #000000;"><strong>Aggregations and Group By</strong></span></p>
      <p>You can perform aggregations and use the \`GROUP BY\` clause:<br />
      import pandas as pd<br />
      import pandasql as psql<br />
      # Create a sample DataFrame<br />
      data = {<br />
      &#8216;name&#8217;: [&#8216;Abhi&#8217;, &#8216;Bharath&#8217;, &#8216;Chandan&#8217;, &#8216;Dravid&#8217;, &#8216;Keerthi&#8217;],<br />
      &#8216;city&#8217;: [&#8216;Bangalore&#8217;, &#8216;Chennai&#8217;, &#8216;Mysore&#8217;, &#8216;Hassan&#8217;, &#8216;HYD’],<br />
      &#8216;score&#8217;: [85, 88, 92, 95, 78]}<br />
      df = pd.DataFrame(data)<br />
      # SQL query to aggregate data<br />
      query = &#8220;&#8221;&#8221;<br />
      SELECT city, AVG(score) as avg_score<br />
      FROM df<br />
      GROUP BY city<br />
      &#8220;&#8221;&#8221;<br />
      # Execute the query<br />
      result = psql.sqldf(query, locals())<br />
      print(result)</p>
      <p><span style="color: #000000;"><strong>Subqueries</strong></span></p>
      <p>You can use subqueries to perform more complex operations:<br />
      import pandas as pd<br />
      import pandasql as psql<br />
      # Create a sample DataFrame<br />
      data = {<br />
      &#8216;name&#8217;: [&#8216;Abhi&#8217;, &#8216;Bharath&#8217;, &#8216;Chandan&#8217;, &#8216;Dravid&#8217;, &#8216;Keerthi&#8217;],<br />
      &#8216;age&#8217;: [24, 27, 22, 32, 29],<br />
      &#8216;score&#8217;: [85, 88, 92, 95, 78]}<br />
      df = pd.DataFrame(data)<br />
      # SQL query with subquery<br />
      query = &#8220;&#8221;&#8221;<br />
      SELECT name, age<br />
      FROM df<br />
      WHERE score &gt; (<br />
      SELECT AVG(score) FROM df<br />
      )<br />
      # Execute the query<br />
      result = psql.sqldf(query, locals())<br />
      print(result)</p>
      <p><span style="color: #000000;"><strong>complex SQL queries involving multiple conditions and calculations</strong></span></p>
      <p>import pandas as pd<br />
      import pandasql as psql<br />
      # Create a sample DataFrame<br />
      data = {<br />
      &#8216;name&#8217;: [&#8216;Abhi&#8217;, &#8216;Bharath&#8217;, &#8216;Chandan&#8217;, &#8216;Dravid&#8217;, &#8216;Keerthi&#8217;],<br />
      &#8216;age&#8217;: [24, 27, 22, 32, 29],<br />
      &#8216;score&#8217;: [85, 88, 92, 95, 78]}<br />
      df = pd.DataFrame(data)<br />
      # Complex SQL query<br />
      query = &#8220;&#8221;&#8221;<br />
      SELECT name, age, score,<br />
      CASE<br />
      WHEN age &lt; 25 THEN &#8216;Young&#8217;<br />
      WHEN age BETWEEN 25 AND 30 THEN &#8216;Adult&#8217;<br />
      ELSE &#8216;Senior&#8217;<br />
      END as age_group<br />
      FROM df<br />
      WHERE score &gt; 80<br />
      ORDER BY score DESC<br />
      &#8220;&#8221;&#8221;<br />
      # Execute the query<br />
      result = psql.sqldf(query, locals())<br />
      print(result)</p>
      <p><span style="color: #000000;"><strong>Window Functions</strong></span></p>
      <p>Implementing SQL window functions for advanced analytical queries.<br />
      import pandas as pd<br />
      import pandasql as psql<br />
      # Sample DataFrame<br />
      data = {<br />
      &#8216;name&#8217;: [&#8216;Abhi&#8217;, &#8216;Bharath&#8217;, &#8216;Chandan&#8217;, &#8216;Dravid&#8217;, &#8216;Keerthi&#8217;],<br />
      &#8216;city&#8217;: [&#8216;Bangalore&#8217;, &#8216;Chennai&#8217;, &#8216;Hassan&#8217;, &#8216;Hassan&#8217;, &#8216;HYD’],<br />
      &#8216;score&#8217;: [85, 88, 92, 95, 78]}<br />
      df = pd.DataFrame(data)<br />
      # SQL query using window functions<br />
      query = &#8220;&#8221;&#8221;<br />
      SELECT name, city, score,<br />
      RANK() OVER (PARTITION BY city ORDER BY score DESC) as rank<br />
      FROM df<br />
      &#8220;&#8221;&#8221;<br />
      # Execute the query<br />
      result = psql.sqldf(query, locals())<br />
      print(result)</p>
      <p><span style="color: #000000;"><strong>Best Practices for Advanced PandasSQL</strong></span></p>
      <ol>
      <li>Combine SQL and Pandas: Use SQL for complex querying and aggregations,<br />
      and Pandas for further data manipulation and analysis.</li>
      <li>Optimize Queries: Index your DataFrames or SQL tables where possible to<br />
      improve query performance.</li>
      <li>Leverage External Databases: For very large datasets, connect to scalable<br />
      databases like PostgreSQL or MySQL and perform heavy lifting there before<br />
      bringing data into Pandas.</li>
      <li>Use Window Functions: Utilize window functions for complex analytics,<br />
      such as running totals, moving averages, and ranking.</li>
      <li>Handle Hierarchical Data: Use recursive CTEs for hierarchical data, which<br />
      can simplify complex recursive logic.</li>
      </ol>
      <p><span style="color: #000000;"><strong>Limitations and Considerations</strong></span></p>
      <ol>
      <li>Memory Constraints: \`pandasql\` loads data into memory, so be mindful of<br />
      memory usage with large datasets.</li>
      <li>SQLite Limitations: \`pandasql\` uses SQLite under the hood, which may not<br />
      support all SQL features available in other databases.</li>
      <li>Complex Queries: Complex SQL queries can be harder to debug and may<br />
      require thorough testing and validation</li>
      </ol>` }} /></div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				<section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-c3ce3fb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c3ce3fb" data-element_type="section">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-49c370c" data-id="49c370c" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-1ebf564 elementor-post-navigation-borders-yes elementor-widget elementor-widget-post-navigation" data-id="1ebf564" data-element_type="widget" data-widget_type="post-navigation.default">
      				<div className="elementor-widget-container">
      					<div className="elementor-post-navigation">
      			<div className="elementor-post-navigation__prev elementor-post-navigation__link">
      				<Link to="/advantages-of-data-visualization-tools"  rel="prev"><span className="post-navigation__arrow-wrapper post-navigation__arrow-prev"><i className="fa fa-angle-left" aria-hidden="true"></i><span className="elementor-screen-only">Prev</span></span><span className="elementor-post-navigation__link__prev"><span className="post-navigation__prev--label">Previous</span><span className="post-navigation__prev--title">Advantages of Data Visualization tools</span></span></Link>			</div>
      							<div className="elementor-post-navigation__separator-wrapper">
      					<div className="elementor-post-navigation__separator"></div>
      				</div>
      						<div className="elementor-post-navigation__next elementor-post-navigation__link">
      				<Link to="/from-concept-to-clarity-breaking-down-llms-for-everyone-by-s-n-raghavan"  rel="next"><span className="elementor-post-navigation__link__next"><span className="post-navigation__next--label">Next</span><span className="post-navigation__next--title">From Concept to Clarity: Breaking Down LLM’s For Everyone By-S N Raghavan</span></span><span className="post-navigation__arrow-wrapper post-navigation__arrow-next"><i className="fa fa-angle-right" aria-hidden="true"></i><span className="elementor-screen-only">Next</span></span></Link>			</div>
      		</div>
      				</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				</div>

    </>
  );
}

export default SqlQueriesOnPandasDataframeBlogSection;
